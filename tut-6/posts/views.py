from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
posts = [
    {
        "id":1,
        "title":"Demo1",
        "content":"dsklf fsdlo;f aoa fdsdjkfl fskd "
    },
    {
        "id":2,
        "title":"Demo2",
        "content":"dsklf fsdlo;f aoa fdsdjkfl fskd "
    },
    {
        "id":3,
        "title":"Demo3",
        "content":"dsklf fsdlo;f aoa fdsdjkfl fskd "
    }
]
@api_view(http_method_names=["GET", "POST"])
def homepage(request:Request):
    if request.method == "POST":
        data = request.data
        response={"Message":"Hello World", "data":data}
        return Response(data=response, status=status.HTTP_201_CREATED)
    response={"Message":"Hello World"}
    return Response(data=response, status=status.HTTP_200_OK)

@api_view(http_method_names =["GET"])
def getposts(request:Request):
    return Response(data=posts, status=status.HTTP_200_OK)


@api_view(http_method_names = ["GET"])

def postDetails(request:Request, post_index=int):
    post = posts[post_index]
    
    if post:
        return Response(data=post, status=status.HTTP_200_OK)
    
    return Response(data={"error":"post not found"}, status=status.HTTP_200_OK)
