import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: string) {
        if (value.length <= 20) {
            return value;
        }
        return `${value.substr(0, 30)}...`;
    }

}