using Invoiceify.Domain.Model.Entity;

namespace Invoiceify.Domain.Model.Contract;

public class IdentityResult :Result
{
    public UserEntity User { get; set; }
}