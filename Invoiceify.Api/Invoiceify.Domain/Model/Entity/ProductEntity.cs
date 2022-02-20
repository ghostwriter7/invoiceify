using System.ComponentModel.DataAnnotations.Schema;

namespace Invoiceify.Domain.Model.Entity;

public class ProductEntity :Entity
{
    public int UserId { get; set; }
    public int CategoryId { get; set; }
    
    public string Name { get; set; }

    [ForeignKey("UserId")]
    public virtual UserEntity User { get; set; }
    [ForeignKey("CategoryId")]
    public virtual CategoriesEntity Category { get; set; }
}