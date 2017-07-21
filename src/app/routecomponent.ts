import {Component} from "@angular/core";

@Component({
    template:`<h3>Welcome to Home {{name | reversetext | uppercase}}!!</h3> <br>
            price is {{price | currency: 'INR' | lowercase}} <br>
            Dtae is : => {{myDate |date:"MM/dd/yy"}}
    `,
    styles: ["h3 {color: blue;}"]
})
export class HomeComponent{
    name:string = "Aditya";
    price: number = 100.1234;
    myDate = new Date();
}



@Component({
    template:`<h3>Welcome to About !!</h3>`
})
export class AboutComponent{}



@Component({
    template:`<h3>Welcome to Contact !!</h3>`
})
export class ContactComponent{}

@Component({
    template:`<h3>No Route - 404 error !!</h3>`
})
export class NotFoundComponent{}
