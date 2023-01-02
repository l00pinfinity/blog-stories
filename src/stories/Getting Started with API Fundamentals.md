# Getting Started with API Fundamentals

APIs simplify application development by abstracting the underlying implementation and exposing only the objects or actions needed by developers.

An `API` stands for Application Programming Interface. APIs allow computer programs to communicate with each other

```sh
IBM described today’s lack of a public API as like not having a website in the late 1990s
```

# URI
Not to be confused with URL. Uniform Resource Identifier is a unique sequence of characters that identifies a logical or physical resource usually, but not always, connected to the internet.


Photo from Wikipedia
# HTTP Methods and Status Code
HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. The request methods can be `safe`(doesn’t alter the state of the server), `idempotent`(if an identical request can be made once or several times in a row with the same effect while leaving the server in the same state), or `cacheable`(a response that is stored to be retrieved and used later).

## GET
The HTTP GET Method is used to read/retrieve a representation of the specified resource.

## POST
HTTP POST Method submits an entity to the specified resource.

## PUT
HTTP PUT Method replaces all current representations of the target resource with the request payload.

## DELETE
HTTP Deletes the specified resource.

## PATCH
HTTP PATCH Method applies partial modification to a resource.

## TRACE
HTTP Trace performs a message loop-back test along the path to the target resource.

## HEAD
HTTP HEAD Method asks for a response identical to a GET request, but without the response body.

## CONNECT
HTTP CONNECT Method establishes a tunnel to the server identified by the target resource.

## OPTIONS
HTTP OPTIONS Method describes the communication options for the target resource.

# Status Codes
The status codes listed here are defined by RFC 9110, the Internet Standards Track document.

Responses are grouped into five classes.

**1xxs: Informational (100–199)** — The server acknowledges a request.

**2XXS: Success (200–299)** — The server completed the request as expected.

**3XXS: Redirection (300–399)** — Further action needs to be taken to complete the request.

**4XXS: Client Error (400–499)** — The request contains bad syntax or cannot be fulfilled.

**5XXS: Server Error (500–599)** — The server failed to fulfil a valid request

# API Resource Naming
1. Use of nouns in URI to represent resources
2. Use clear, unabridged names that are intuitive
3. Use forward slashes to denote the URI hierarchy
4. Separate words with hyphens
5. Use lowercase letters
6. Avoid special characters
7. Avoid file extensions
8. Be consistent with naming REST API endpoint

# API Versioning, Paging, and Sorting
1. Version

Our code will inevitably change as user requirements and technology change, no matter how well-planned our design may be. This will involve making changes to REST resources adding, updating, and sometimes removing attributes.

There are four popular approaches to versioning REST APIs:

* **URI Versioning** — In this approach, version information becomes part of the URI.
```sh
http://api.example.com/v1/users/
http://api.example.com/1.1/users/
```

* **Accept Header Versioning** — This versioning approach uses the Accept header to communicate version information.
* **URI Parameter Versioning** — This is similar to URI versioning except that the version information is specified as a URI parameter. The Accept header versioning approach is becoming more and more popular as
It allows fine-grained versioning of individual resources without impacting the entire API.
```sh
http://api.example.org/users?v=2
```
* **Custom Header Versioning** — The custom header versioning approach is similar to the Accept header versioning approach except that a custom header is used instead of the Accept header.
X-MS-version: 2021–09–14

*API versions that will no longer be maintained need to be deprecated and eventually retired.
*
2. Paging

Limiting the amount of data returned for bandwidth and performance reasons is critical. Limiting the data can vastly improve the server’s
A data store’s ability to retrieve data quickly and a client’s ability to render the UI and process the data.

There are four common pagination styles:

* **Page Number Pagination** — In this pagination style, the clients specify a page number containing the data they need.
```sh 
http://api.example.com/posts?page=2
```
This scenario would respond with a set of posts. The number of posts returned depends on the default page size set in the service or can be set to a default number.

```sh
http://api.example.com/posts?page=2&size=40
```
* **Limit Offset Pagination** — In this pagination style, the client uses two parameters: a limit and an offset to retrieve the data that they need. The limit parameter indicates the maximum number of returns, and the offset parameter indicates the starting point for the return data.
* **http://api.example.com/posts?limit=10&offset=30
**
* **Cursor-Based Pagination** — In this pagination style, the clients make use of a pointer or a cursor to navigate through the dataset. A cursor is a service-generated random character string that acts as a marker for an item in the dataset.
``sh 
http://api.example.com/posts
``
On receiving the request, the service would send data similar to this:

```yaml {
    “data”:[
     //Posts data
     ],
    “cursors”:{
       “prev”:null,
       “next”:”qwerty”
     }
}
```
* **Time-Based Pagination** — In this style of pagination, the client specifies a timeframe to retrieve the data in which they are interested. The limit indicates the maximum number of items to be returned. The until parameter specifies the end of the time range, whereas the since parameter indicates the beginning of the time range.
```sh
http://graph.example.com/feed?limit=25&until=45678234
http://graph.example.com/feed?limit=25&until=45768901
```

So, in addition to supplying the requested data, it becomes imperative for the service to communicate pagination-specific information such as the total number of records or the total number of pages, or the current page number and page size.

```yaml{
    “data”:[
    //Posts data
    ],
    “totalPages”:10,
    “currentPage”:2,
    “pageSize”:10,
    “totalRecords”:1000
    }
}
```
3. Sorting

Sorting allows REST clients to determine the order in which items in a dataset are arranged. The clients can specify one of the two sorts of directions ascending or descending.

```sh
http://api.example.com/posts?sort=createdDate,title
http://api.example.com/posts?sortByDesc=createdDate&sortByAsc=title
```

# API Error Handling
It is true that we develop software with high intent, but things do go wrong, and we must be prepared to handle and communicate those errors gracefully with good error messages and code.

There are several types of errors that may occur when using an API, including:

1. Errors caused by clients, such as missing or invalid parameters.
2. Errors caused by the server, such as database errors or API code issues.
3. Errors caused by network issues, such as a timeout or connection error.

# API Security
API security refers to protecting APIs against unauthorized access, use, modification, or destruction. You can secure an API by taking the following steps to ensure that the data handled by it, is protected against security threats.

1. Authentication
2. Authorization
3. Input validation
4. Output encoding,
5. API keys
6. Rate limiting
7. Transport security
8. Logging and Monitoring

> I’m working on a separate story about API security alone since it’s so broad, so stay tuned.

# API Documentation
Yes, I know you hate documentation or maybe not but you need to guide the one integrating your API with instructions on how to effectively use it. Proper documentation helps people to understand what it does and how each request works.

API documentation should describe the various endpoints available, their methods, and parameters and also sample successful and failed requests and responses.

A few examples of API Documentation:

1. [Twilio](https://www.twilio.com/docs)
2. [GitHub](https://docs.github.com/en)
3. [Stripe](https://stripe.com/docs)

Please check out https://github.com/l00pinfinity/blog-stories. It contains my blog posts online, do you have any suggestions? A correction, perhaps? Make a pull request on Github or open an issue.

Thanks for reading and stay tuned!!!
