using Invoiceify.Domain.Model.Entity;

namespace Invoiceify.Domain.Model.Contract;

public class IdentityResult :Result
{
    public string Token { get; set; }
    public UserEntity User { get; set; }
}