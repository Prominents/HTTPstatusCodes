const statusCodes = [
    // 1xx Informational
    { code: 100, description: "Continue - The server has received the request headers and the client should proceed to send the request body" },
    { code: 101, description: "Switching Protocols - The requester has asked the server to switch protocols" },
    { code: 102, description: "Processing - The server is processing the request, but no response is available yet" },
    
    // 2xx Success
    { code: 200, description: "OK - The request has succeeded" },
    { code: 201, description: "Created - The request has been fulfilled and resulted in a new resource being created" },
    { code: 202, description: "Accepted - The request has been accepted for processing, but the processing has not been completed" },
    { code: 203, description: "Non-Authoritative Information - The server is a transforming proxy that received a 200 OK from its origin" },
    { code: 204, description: "No Content - The server successfully processed the request and is not returning any content" },
    { code: 205, description: "Reset Content - The server successfully processed the request, but is not returning any content and requires that the requester reset the document view" },
    { code: 206, description: "Partial Content - The server is delivering only part of the resource due to a range header sent by the client" },
    
    // 3xx Redirection
    { code: 300, description: "Multiple Choices - The request has more than one possible response" },
    { code: 301, description: "Moved Permanently - The URL of the requested resource has been changed permanently" },
    { code: 302, description: "Found - The URI of requested resource has been changed temporarily" },
    { code: 303, description: "See Other - The server sent this response to direct the client to get the requested resource at another URI with a GET request" },
    { code: 304, description: "Not Modified - The client can use cached version of requested resource" },
    { code: 305, description: "Use Proxy - The requested resource is available only through a proxy" },
    { code: 307, description: "Temporary Redirect - The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request" },
    { code: 308, description: "Permanent Redirect - The resource is now permanently located at another URI" },
    
    // 4xx Client Errors
    { code: 400, description: "Bad Request - The server cannot or will not process the request due to an apparent client error" },
    { code: 401, description: "Unauthorized - The request requires user authentication" },
    { code: 402, description: "Payment Required - Reserved for future use" },
    { code: 403, description: "Forbidden - The server understood the request but refuses to authorize it" },
    { code: 404, description: "Not Found - The server cannot find the requested resource" },
    { code: 405, description: "Method Not Allowed - The request method is not supported for the requested resource" },
    { code: 406, description: "Not Acceptable - The server cannot produce a response matching the list of acceptable values defined in the request's headers" },
    { code: 407, description: "Proxy Authentication Required - The client must first authenticate itself with the proxy" },
    { code: 408, description: "Request Timeout - The server timed out waiting for the request" },
    { code: 409, description: "Conflict - The request could not be completed due to a conflict with the current state of the resource" },
    { code: 410, description: "Gone - The requested resource is no longer available and will not be available again" },
    { code: 411, description: "Length Required - The request did not specify the length of its content, which is required by the requested resource" },
    { code: 412, description: "Precondition Failed - The server does not meet one of the preconditions that the requester put on the request" },
    { code: 413, description: "Payload Too Large - The request is larger than the server is willing or able to process" },
    { code: 414, description: "URI Too Long - The URI provided was too long for the server to process" },
    { code: 415, description: "Unsupported Media Type - The request entity has a media type which the server or resource does not support" },
    { code: 416, description: "Range Not Satisfiable - The client has asked for a portion of the file, but the server cannot supply that portion" },
    { code: 417, description: "Expectation Failed - The server cannot meet the requirements of the Expect request-header field" },
    { code: 418, description: "I'm a teapot - The server refuses the attempt to brew coffee with a teapot" },
    { code: 422, description: "Unprocessable Entity - The request was well-formed but was unable to be followed due to semantic errors" },
    { code: 425, description: "Too Early - The server is unwilling to risk processing a request that might be replayed" },
    { code: 426, description: "Upgrade Required - The client should switch to a different protocol" },
    { code: 428, description: "Precondition Required - The origin server requires the request to be conditional" },
    { code: 429, description: "Too Many Requests - The user has sent too many requests in a given amount of time" },
    { code: 431, description: "Request Header Fields Too Large - The server is unwilling to process the request because its header fields are too large" },
    { code: 451, description: "Unavailable For Legal Reasons - The server is denying access to the resource as a consequence of a legal demand" },
    
    // 5xx Server Errors
    { code: 500, description: "Internal Server Error - A generic error message, given when an unexpected condition was encountered" },
    { code: 501, description: "Not Implemented - The server either does not recognize the request method, or it lacks the ability to fulfill the request" },
    { code: 502, description: "Bad Gateway - The server was acting as a gateway or proxy and received an invalid response from the upstream server" },
    { code: 503, description: "Service Unavailable - The server is currently unavailable (because it is overloaded or down for maintenance)" },
    { code: 504, description: "Gateway Timeout - The server was acting as a gateway or proxy and did not receive a timely response from the upstream server" },
    { code: 505, description: "HTTP Version Not Supported - The server does not support the HTTP protocol version used in the request" },
    { code: 506, description: "Variant Also Negotiates - Transparent content negotiation for the request results in a circular reference" },
    { code: 507, description: "Insufficient Storage - The server is unable to store the representation needed to complete the request" },
    { code: 508, description: "Loop Detected - The server detected an infinite loop while processing the request" },
    { code: 510, description: "Not Extended - Further extensions to the request are required for the server to fulfill it" },
    { code: 511, description: "Network Authentication Required - The client needs to authenticate to gain network access" }
];

const container = document.querySelector('.status-codes-container');
const searchInput = document.getElementById('search');

function displayStatusCodes(codes) {
    container.innerHTML = codes.map(code => `
        <div class="status-card">
            <div class="status-code">${code.code}</div>
            <div class="status-description">${code.description}</div>
        </div>
    `).join('');
}

function filterStatusCodes() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCodes = statusCodes.filter(code => 
        code.code.toString().includes(searchTerm) || 
        code.description.toLowerCase().includes(searchTerm)
    );
    displayStatusCodes(filteredCodes);
}

// Initial display
displayStatusCodes(statusCodes);

// Event listener for search
searchInput.addEventListener('input', filterStatusCodes); 