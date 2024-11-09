# Hello world whit javascript
 ![Ja´vascript](./public/img/content.png "Hello from javascript")

 ![](./public/img/result.png "Result event")

It is a program that manipulates the DOM and presents a typical hello world message

## :open_book:How to use
* Clone the repository

    ```
    git clone https://github.com/Pablo-man/js_proyect_docker.git
    ```
[!NOTE]
Because the application is made up of statistical files, these must be served on a web server, so the VSCode code editor will be used together with the live server extension in this example.

* Once the project has been cloned, you must open it with the VSCode code editor with the Live Server extension previously installed

* Inside the editor, open the index.html file and press the button corresponding to the mentioned extension, which is located in the lower right area of ​​the editor window

    ![LiveServerIconStart](./public/img/liverServer.png "Deploy page")

## :rocket:How to run in docker
### Pre-requisites
* Docker - DockerDesktop installed
* DockerHub account
### Download image
```
docker pull pamendeza/hellojavascript
```
### Run image
```
docker run --name <NEWCONTAINERNAME> -d -p 8080:80 <IMAGENAME>
```
### View the results
Open new window browser and search localhost:8080

