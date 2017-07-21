
import {Pipe} from "@angular/core";
import {PipeTransform} from "@angular/core";

@Pipe({
    name: "reversetext"
})

export class Reverseletters implements  PipeTransform {

    transform(value: string): string {
        return value.split("").reverse().join("");
    }
}
