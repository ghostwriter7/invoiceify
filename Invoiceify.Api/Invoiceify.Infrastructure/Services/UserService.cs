using System.Net;
using Invoiceify.Domain.Model.Contract;
using Invoiceify.Domain.Model.Entity;
using Invoiceify.Infrastructure.Interface;
using Invoiceify.Persistence;
using Microsoft.EntityFrameworkCore;
using BC = BCrypt.Net.BCrypt;

namespace Invoiceify.Infrastructure.Services;

public class UserService :IUserService
{
    private readonly ApplicationDbContext _dbContext;

    public UserService(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<bool> IsExistUserByEmail(string email)
    {
        return await _dbContext.Users.AnyAsync(a => a.Email == email);
    }

    public async Task<UserEntity?> GetByIdAsync(int id)
    {
        return await _dbContext.Users.FirstOrDefaultAsync(a => a.Id == id);
    }

    public async Task<UserEntity?> GetUserByEmail(string email)
    {
        return await _dbContext.Users.FirstOrDefaultAsync(a => a.Email == email);
    }

    public async Task<IdentityResult> CreateAsync(UserEntity user, string password)
    {
        var userByEmailExist = await IsExistUserByEmail(user.Email);
        if (userByEmailExist)
            return new IdentityResult() { Succeeded = false, StatusCode = HttpStatusCode.BadRequest, Errors = new[] { "User with this email already exists " } };
        
        user.PasswordSalt = BC.GenerateSalt();
        user.PasswordHash = BC.HashPassword(password, user.PasswordSalt);

        var entityEntry = await _dbContext.Users.AddAsync(user);

        return new IdentityResult()
        {
            Succeeded = true,
            User = entityEntry.Entity,
            StatusCode = HttpStatusCode.Created,
        };
    }
}