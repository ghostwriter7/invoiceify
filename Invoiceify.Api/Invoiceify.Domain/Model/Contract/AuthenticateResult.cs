
using Invoiceify.Domain.Model.DTO;
using Invoiceify.Domain.Model.Entity;

namespace Invoiceify.Domain.Model.Contract;

public class AuthenticateResult :Result
{
    public User User { get; set; }
    public string Token { get; set; }
}