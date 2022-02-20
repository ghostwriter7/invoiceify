using System.ComponentModel.DataAnnotations.Schema;

namespace Invoiceify.Domain.Model.Entity;

public class CategoriesEntity :Entity
{
    public int UserId { get; set; }
    public string Name { get; set; }

    [ForeignKey("UserId")]
    public virtual UserEntity User { get; set; }
}
