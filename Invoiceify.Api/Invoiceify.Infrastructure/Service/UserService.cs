using Invoiceify.Infrastructure.Service.Interface;
using Invoiceify.Persistence;

namespace Invoiceify.Infrastructure.Service;

public class UserService :IUserService
{
    private readonly ApplicationDbContext _dbContext;

    public UserService(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }
}