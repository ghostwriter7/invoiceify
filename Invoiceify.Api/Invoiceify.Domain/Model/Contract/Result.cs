using System.Net;

namespace Invoiceify.Domain.Model.Contract;

public abstract class Result
{
    public bool Succeeded { get; set; }
    public HttpStatusCode StatusCode { get; set; }
    public IEnumerable<string> Errors { get; set; }
}