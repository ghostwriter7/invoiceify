using System.Threading.Tasks;
using Invoiceify.Domain.Model.Contract;
using Invoiceify.Domain.Model.Entity;

namespace Invoiceify.Infrastructure.Interface;

public interface IUserService
{
    Task<bool> IsExistUserByEmail(string email);
    Task<UserEntity?> GetByIdAsync(int id);
    Task<UserEntity?> GetUserByEmail(string email);
    
    bool Login(UserEntity user, string password);
    Task<IdentityResult> CreateAsync(UserEntity user, string password);
}