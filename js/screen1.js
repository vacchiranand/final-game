class Screen1 {
    constructor(){
        this.tittle = createElement("h1")
        this.input = createInput("name");
        this.button = createButton("play");
        this.button2 = createButton("tutorial");
        this.greeting = createElement("h3");
    }
       hide(){
           this.greeting.hide();           
           this.input.hide();
           this.button.hide();
           this.button2.hide();
 }
       display(){
           this.tittle.html( "kingdom fantasy");
           this.tittle.position(windowWidth/2,100);
           this.input.position(windowWidth/2-40,windowHeight/2-80);
           this.button.position(windowWidth/2,windowHeight/2);
           this.button2.position(windowWidth/2+50,windowHeight/2);
           this.button.mousePressed(()=>{
           this.button.hide();
           this.input.hide();
           this.button2.hide();
           gameState = 1;
           })
           
           

           }


       }
