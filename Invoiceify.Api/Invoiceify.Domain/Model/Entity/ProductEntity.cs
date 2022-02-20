namespace Invoiceify.Domain.Model.Entity;

public class ProductEntity :Entity
{
    public string Name { get; set; }
    public UserEntity UserId { get; set; }
    public CategoriesEntity Category { get; set; }
}