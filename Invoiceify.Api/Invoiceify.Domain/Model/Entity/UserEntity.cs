using System.ComponentModel.DataAnnotations;

namespace Invoiceify.Domain.Model.Entity;

public class UserEntity :Entity
{
    public string Email { get; set; }

    public string PasswordHash { get; set; }
    
    public string PasswordSalt { get; set; }
}