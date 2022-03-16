import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selectall',
  templateUrl: './selectall.component.html',
  styleUrls: ['./selectall.component.css'],
})
export class SelectallComponent implements OnInit {
  form: any;

  itemlist: string[] = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];

  selectedvalues: string[] = [];

  get options(): FormGroup {
    return this.form.get('options');
  }
  get selectall(): FormControl {
    return this.form.get('selectall');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      selectall: [false, [], []],
      options: this.fb.group(
        this.itemlist.reduce((acc: any, cur) => {
          acc[cur] = [false, [], []];
          return acc;
        }, {})
      ),
    });

    this.trackitem();
    this.selectallitem();
  }

  selectallitem() {
    this.selectall.valueChanges.subscribe((val) => {
      this.setAllItemsValue(val);
    });
  }

  setAllItemsValue(val: boolean) {
    const controls = Object.values(this.options.controls) as FormControl[];

    controls.forEach((control: FormControl) => {
      control.setValue(val);
    });
  }

  trackitem() {
    this.itemlist.forEach((item: string) => {
      this.options.get(item)?.valueChanges.subscribe((val) => {
        if (val) {
          this.selectedvalues.push(item);
        } else {
          this.selectedvalues = this.selectedvalues.filter(
            (ele) => ele !== item
          );
        }

        const seletallval = this.itemlist.length === this.selectedvalues.length;
        this.selectall.setValue(seletallval, { emitEvent: false });
      });
    });
  }

  clearall() {
    this.setAllItemsValue(false);
    this.selectall.setValue(false);
  }
}
