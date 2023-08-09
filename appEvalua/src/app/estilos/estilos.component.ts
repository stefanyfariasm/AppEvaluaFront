import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
  
})
export class EstilosComponent implements OnInit {
  //disableSelect = new FormControl(true);

titulo = "";
informacion = "";
  
data=[{"1": "1. Standard American Beer"}, {"1A": "1A. American Light Lager"}, {"1B": "1B. American Lager"}, {"1C": "1C. Cream Ale"}, {"1D": "1D. American Wheat Beer"}, {"2": "2. International Lager"}, {"2A": "2A. International Pale Lager"}, {"2B": "2B. International Amber Lager"}, {"2C": "2C. International Dark Lager"}, {"3": "3. Czech Lager"}, {"3A": "3A. Czech Pale Lager"}, {"3B": "3B. Czech Premium Pale Lager"}, {"3C": "3C. Czech Amber Lager"}, {"3D": "3D. Czech Dark Lager"}, {"4": "4. Pale Malty European Lager"}, {"4A": "4A. Munich Helles"}, {"4B": "4B. Festbier"}, {"4C": "4C. Helles Bock"}, {"5": "5. Pale Bitter European Beer"}, {"5A": "5A. German Leichtbier"}, {"5B": "5B. K\u00f6lsch"}, {"5C": "5C. German Helles Exportbier"}, {"5D": "5D. German Pils"}, {"6": "6. Amber Malty European Lager"}, {"6A": "6A. M\u00e4rzen"}, {"6B": "6B. Rauchbier"}, {"6C": "6C. Dunkles Bock"}, {"7": "7. Amber Bitter European Beer"}, {"7A": "7A. Vienna Lager"}, {"7B": "7B. Altbier"}, {"7C": "7C. Kellerbier"}, {"7C": "7C. Kellerbier: Pale Kellerbier"}, {"8": "8. Dark European Lager"}, {"8A": "8A. Munich Dunkel"}, {"8B": "8B. Schwarzbier"}, {"9": "9. Strong European Beer"}, {"9A": "9A. Doppelbock"}, {"9B": "9B. Eisbock"}, {"9C": "9C. Baltic Porter"}, {"10": "10. German Wheat Beer"}, {"10A": "10A. Weissbier"}, {"10B": "10B. Dunkles Weissbier"}, {"10C": "10C. Weizenbock"}, {"11": "11. British Bitter"}, {"11A": "11A. Ordinary Bitter"}, {"11B": "11B. Best Bitter"}, {"11C": "11C. Strong Bitter"}, {"12": "12. Pale Commonwealth Beer"}, {"12A": "12A. British Golden Ale"}, {"12B": "12B. Australian Sparkling Ale"}, {"12C": "12C. English IPA"}, {"13": "13. Brown British Beer"}, {"13A": "13A. Dark Mild"}, {"13B": "13B. British Brown Ale"}, {"13C": "13C. English Porter"}, {"14": "14. Scottish Ale"}, {"14A": "14A. Scottish Light"}, {"14B": "14B. Scottish Heavy"}, {"14C": "14C. Scottish Export"}, {"15": "15. Irish Beer"}, {"15A": "15A. Irish Red Ale"}, {"15B": "15B. Irish Stout"}, {"15C": "15C. Irish Extra Stout"}, {"16": "16. Dark British Beer"}, {"16A": "16A. Sweet Stout"}, {"16B": "16B. Oatmeal Stout"}, {"16C": "16C. Tropical Stout"}, {"16D": "16D. Foreign Extra Stout"}, {"17": "17. Strong British Ale"}, {"17A": "17A. British Strong Ale"}, {"17B": "17B. Old Ale"}, {"17C": "17C. Wee Heavy"}, {"17D": "17D. English Barleywine"}, {"18": "18. Pale American Ale"}, {"18A": "18A. Blonde Ale"}, {"18B": "18B. American Pale Ale"}, {"19": "19. Amber and Brown American Beer"}, {"19A": "19A. American Amber Ale"}, {"19B": "19B. California Common"}, {"19C": "19C. American Brown Ale"}, {"20": "20. American Porter and Stout"}, {"20A": "20A. American Porter"}, {"20B": "20B. American Stout"}, {"20C": "20C. Imperial Stout"}, {"21": "21. IPA"}, {"21A": "21A. American IPA"}, {"21B": "21B. Specialty IPA"}, {"21B": "21B. Specialty IPA: Belgian IPA"}, {"21B": "21B. Specialty IPA: Black IPA"}, {"21B": "21B. Specialty IPA: Brown IPA"}, {"21B": "21B. Specialty IPA: Red IPA"}, {"21B": "21B. Specialty IPA: Rye IPA"}, {"21B": "21B. Specialty IPA: White IPA"}, {"21C": "21C. Hazy IPA"}, {"22": "22. Strong American Ale"}, {"22A": "22A. Double IPA"}, {"22B": "22B. American Strong Ale"}, {"22C": "22C. American Barleywine"}, {"22D": "22D. Wheatwine"}, {"23": "23. European Sour Ale"}, {"23A": "23A. Berliner Weisse"}, {"23B": "23B. Flanders Red Ale"}, {"23C": "23C. Oud Bruin"}, {"23D": "23D. Lambic"}, {"23E": "23E. Gueuze"}, {"23F": "23F. Fruit Lambic"}, {"24": "24. Belgian Ale"}, {"24A": "24A. Witbier"}, {"24B": "24B. Belgian Pale Ale"}, {"24C": "24C. Bi\u00e8re de Garde"}, {"25": "25. Strong Belgian Ale"}, {"25A": "25A. Belgian Blond Ale"}, {"25B": "25B. Saison"}, {"25C": "25C. Belgian Golden Strong Ale"}, {"26": "26. Monastic Ale"}, {"26A": "26A. Belgian Single"}, {"26B": "26B. Belgian Dubbel"}, {"26C": "26C. Belgian Tripel"}, {"26D": "26D. Belgian Dark Strong Ale"}, {"27": "27. Historical Beer"}, {"27A": "27A. Historical Beer: Gose"}, {"27A": "27A. Historical Beer: Kentucky Common"}, {"27A": "27A. Historical Beer: Lichtenhainer"}, {"27A": "27A. Historical Beer: London Brown Ale"}, {"27A": "27A. Historical Beer: Piwo Grodziskie"}, {"27A": "27A. Historical Beer: Pre-Prohibition Lager"}, {"27A": "27A. Historical Beer: Pre-Prohibition Porter"}, {"27A": "27A. Historical Beer: Roggenbier"}, {"27A": "27A. Historical Beer: Sahti"}, {"28": "28. American Wild Ale"}, {"28A": "28A. Brett Beer"}, {"28B": "28B. Mixed-Fermentation Sour Beer"}, {"28C": "28C. Wild Specialty Beer"}, {"28D": "28D. Straight Sour Beer"}, {"29": "29. Fruit Beer"}, {"29A": "29A. Fruit Beer"}, {"29B": "29B. Fruit and Spice Beer"}, {"29C": "29C. Specialty Fruit Beer"}, {"30": "30. Spiced Beer"}, {"30A": "30A. Spice, Herb, or Vegetable Beer"}, {"30B": "30B. Autumn Seasonal Beer"}, {"30C": "30C. Winter Seasonal Beer"}, {"30D": "30D. Specialty Spice Beer"}, {"31": "31. Alternative Fermentables Beer"}, {"31A": "31A. Alternative Grain Beer"}, {"31B": "31B. Alternative Sugar Beer"}, {"32": "32. Smoked Beer"}, {"32A": "32A. Classic Style Smoked Beer"}, {"32B": "32B. Specialty Smoked Beer"}, {"33": "33. Wood Beer"}, {"33A": "33A. Wood-Aged Beer"}, {"33B": "33B. Specialty Wood-Aged Beer"}, {"34": "34. Specialty Beer"}, {"34A": "34A. Commercial Specialty Beer"}, {"34B": "34B. Mixed-Style Beer"}, {"34C": "34C. Experimental Beer"}, {"M1A": "M1A. Dry Mead"}, {"M1C": "M1C. Sweet Mead"}, {"M2A": "M2A. Cyser"}, {"M2C": "M2C. Berry Mead"}, {"M2E": "M2E. Melomel"}, {"M3A": "M3A. Fruit and Spice Mead"}, {"M4": "M4. Specialty Mead"}, {"M4B": "M4B. Historical Mead"}, {"C1": "C1. Standard Cider and Perry"}, {"C1B": "C1B. English Cider"}, {"C1D": "C1D. New World Perry"}, {"C2": "C2. Specialty Cider and Perry"}, {"C2B": "C2B. Cider with Other Fruit"}, {"C2D": "C2D. Ice Cider"}, {"C2F": "C2F. Specialty Cider/Perry"}]
lista: any[]=[];
  disableSelect: boolean = false;
  dropdownOptions: any[]=[];
  selectedOption: string | undefined;
  constructor(private sharedDataService: SharedDataService) { 
    this.initializeData();
  }



  initializeData(): void {
    this.selectedOption = '';
    this.lista = [];
    for (var i = 0; i < this.data.length; i++) {
      var valor = Object.values(this.data[i])[0];
      this.lista.push(valor);
    }
  }
    

  
  guardarDatos(): void {
    // Guardar los valores en el servicio
    this.sharedDataService.titulo = this.titulo;
    this.sharedDataService.estilo = this.selectedOption;
  }
  esAlfanumerico(texto: string) {
    var patron = /^[a-zA-Z0-9]+$/;
    return patron.test(texto);
  }

verificarTitulo(): true | false{
  if(this.titulo.length >4 && this.titulo.length< 100 && this.esAlfanumerico(this.titulo)){
    return true;

  }
  return false;
}

verificarInformacion(): true | false{
  if(this.titulo.length >4 && this.titulo.length< 300){
    return true;

  }
  return false;
}



ngOnInit(): void {
  this.sharedDataService.data1 = this.lista;
  this.initializeData();
 
}

  // ngOnInit(): void {
    
  //   // this.http.get<any[]>('./estilos/estilos.json').subscribe(
  //   //   (data: any[]) => {
  //   //     this.dropdownOptions = data;
  //   //   },
  //   //   (error) => {
  //   //     console.error('Error al obtener los datos del archivo JSON', error);
  //   //   }
  //   // );
    
  // }

}
