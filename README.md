# Hello world whit javascript
## Results
<p align="center">
    <img src="./public/img/content.png" alt="Hello from javascript">
</p>
<p align="center">
    <img src="./public/img/result.png" alt="Result event">
</p>

It is a program that manipulates the DOM and presents a typical hello world message

## :open_book: How to use
### Pre-requisites
* Web browser
* VSCode editor
* VSCode Live Server extension
---
* Clone the repository

    ```
    git clone https://github.com/Pablo-man/js_proyect_docker.git
    ```
> [!NOTE]
> Because the application is made up of statistical files, these must be served on a web server, so the VSCode code editor will be used together with the live server extension in this example.

* Once the project has been cloned, you must open it with the VSCode code editor with the Live Server extension previously installed

* Inside the editor, open the index.html file and press the button corresponding to the mentioned extension, which is located in the lower right area of ​​the editor window

    ![LiveServerIconStart](./public/img/liverServer.png "Deploy page")

## :rocket: How to run with docker
### Pre-requisites
* Docker - DockerDesktop installed
* DockerHub account
---
Visit the following link to learn about the process of generating the project image and contenerization

:whale2: [GO](https://hub.docker.com/repository/docker/pamendeza/js_docker_project, "Docker steps")

## :light_rail: PAAS Deploy(Railway)
For its deployment in a PAAS we will rely on railway and its easy implementation thanks to its container management. 

![Railway Service](./public/img/railwayDeploy.png "Service")

The platform automatically uses our Dockerfile to build the container. 

![Build Container](./public/img/dockerFile.png "Build Configuration")

> [!IMPORTANT]
> Next, the configuration that we must add is the generation of a domain along with the desired port, in this case the indicated thing would be to point to port 80 on which nginx is working

![Generate Domain](./public/img/domain.png "Domain")

[Hello World](https://jsproyectdocker-production.up.railway.app "click for visit")