import { Component } from "@angular/core";

@Component({
    selector:'template-app',
    template : `<h2> hello bangladesh </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, totam.</p>
                <button>click men </button>
    `,
    standalone: true
})
// this is a standalone component which has not depen on other 
export class TemplateComponent{
    value : string = "dynamic values"
}