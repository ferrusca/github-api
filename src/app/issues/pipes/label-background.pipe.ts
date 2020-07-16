import { Pipe, PipeTransform } from "@angular/core";
import { Label } from "../../models/label.interface";

@Pipe({name: 'LabelBackground'})
export class LabelBackgroundPipe implements PipeTransform {
  transform(label: Label): string {
    return `#${label.color}`;
  }
}