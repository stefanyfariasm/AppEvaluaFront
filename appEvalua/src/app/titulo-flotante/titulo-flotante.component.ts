import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../serviciosGenerales/shared-data.service';

@Component({
  selector: 'app-titulo-flotante',
  templateUrl: './titulo-flotante.component.html',
  styleUrls: ['./titulo-flotante.component.css']
})
export class TituloFlotanteComponent implements OnInit {
  
  data2=[
    [
      "Overall Impression",
      "A highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst-quenching."
    ],
    [
      "Overall Impression",
      "A highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst-quenching."
    ],
    [
      "Overall Impression",
      "A very pale, highly-carbonated, light-bodied, well-attenuated lager with a very neutral flavor profile and low bitterness. Served very cold, it can be a very refreshing and thirst-quenching drink."
    ],
    [
      "Overall Impression",
      "A clean, well-attenuated, highly carbonated, flavorful American “lawnmower” beer. Easily drinkable, smooth, and refreshing, with more character than typical American lagers, yet still subtle and restrained."
    ],
    [
      "Overall Impression",
      "A pale, refreshing grainy, doughy, or bready wheat beer with a clean fermentation profile and a variable hop character and bitterness. Its lighter body and higher carbonation contribute to its easy-drinking nature."
    ],
    [
      "Overall Impression",
      "A highly-attenuated pale lager without strong flavors, typically well-balanced and highly carbonated. Served cold, it is refreshing and thirst-quenching."
    ],
    [
      "Overall Impression",
      "A highly-attenuated pale lager without strong flavors, typically well-balanced and highly carbonated. Served cold, it is refreshing and thirst-quenching."
    ],
    [
      "Overall Impression",
      "A smooth, easily-drinkable, malty amber lager with a flavorful caramel or toast character. Usually fairly well-attenuated, often with an adjunct quality and restrained bitterness."
    ],
    [
      "Overall Impression",
      "A darker, richer, and somewhat sweeter version of international pale lager with a little more body and flavor, but equally restrained in bitterness. The low bitterness leaves the malt as the primary flavor element, and the low hop levels provide very little in the way of balance."
    ],
    [
      "Overall Impression",
      "A lighter-bodied, rich, refreshing, hoppy, bitter pale Czech lager having the familiar flavors of the stronger Czech Premium Pale Lager (Pilsner-type) beer but in a lower alcohol, lighter-bodied, and slightly less intense format."
    ],
    [
      "Overall Impression",
      "A lighter-bodied, rich, refreshing, hoppy, bitter pale Czech lager having the familiar flavors of the stronger Czech Premium Pale Lager (Pilsner-type) beer but in a lower alcohol, lighter-bodied, and slightly less intense format."
    ],
    [
      "Overall Impression",
      "A refreshing pale Czech lager with considerable malt and hop character and a long finish. The malt flavors are complex for a Pilsner-type beer. The bitterness is strong and clean but lacks harshness, which gives a well-balanced, rounded flavor impression that enhances drinkability."
    ],
    [
      "Overall Impression",
      "A malty amber Czech lager with a hop character that can vary from low to quite significant. The malt flavors also can vary, leading to different interpretations and balances ranging from drier, bready, and slightly biscuity to sweeter and somewhat caramel-like."
    ],
    [
      "Overall Impression",
      "A rich, dark, malty Czech lager with a roast character that can vary from almost absent to quite prominent. Malty balance and an interesting and complex flavor profile, with variable levels of hopping that provides a range of possible interpretations."
    ],
    [
      "Overall Impression",
      "A smooth, clean, pale German lager with a moderately strong malty flavor and a light hop character. Deftly balances strength and drinkability, with a palate impression and finish that encourages drinking. Showcases elegant German malt flavors without becoming too heavy or filling."
    ],
    [
      "Overall Impression",
      "A relatively pale, strong, malty German lager with a nicely attenuated finish that enhances drinkability. The hop character is generally more apparent and the malt character less deeply rich than in other Bocks."
    ],
    [
      "Overall Impression",
      "A pale, highly-attenuated, light-bodied German lager with lower alcohol and calories than standard-strength beers. Moderately bitter with noticeable malt and hop flavors, the beer is still interesting to drink."
    ],
    [
      "Overall Impression",
      "A pale, highly-attenuated, light-bodied German lager with lower alcohol and calories than standard-strength beers. Moderately bitter with noticeable malt and hop flavors, the beer is still interesting to drink."
    ],
    [
      "Overall Impression",
      "A subtle, brilliantly clear, pale beer with a delicate balance of malt, fruit, and hop character, moderate bitterness, and a well-attenuated but soft finish. Freshness makes a huge difference with this beer, as the delicate character can fade quickly with age."
    ],
    [
      "Overall Impression",
      "A golden German lager balancing a smooth malty profile with a bitter, hoppy character in a slightly above-average body and strength beer."
    ],
    [
      "Overall Impression",
      "A pale, dry, bitter German lager featuring a prominent hop aroma. Crisp, clean, and refreshing, showing a brilliant gold color with excellent head retention."
    ],
    [
      "Overall Impression",
      "An amber, malty German lager with a clean, rich, toasty, bready malt flavor, restrained bitterness, and a well-attenuated finish. The overall malt impression is soft, elegant, and complex, with a rich malty aftertaste that is never cloying or heavy."
    ],
    [
      "Overall Impression",
      "An amber, malty German lager with a clean, rich, toasty, bready malt flavor, restrained bitterness, and a well-attenuated finish. The overall malt impression is soft, elegant, and complex, with a rich malty aftertaste that is never cloying or heavy."
    ],
    [
      "Overall Impression",
      "A beechwood-smoked, malty, amber German lager. The expected Märzen profile of toasty-rich malt, restrained bitterness, clean fermentation, and a relatively dry finish is enhanced by a noticeable to intense smoke character."
    ],
    [
      "Overall Impression",
      "A strong, dark, malty German lager beer that emphasizes the malty-rich and somewhat toasty qualities of continental malts without being sweet in the finish."
    ],
    [
      "Overall Impression",
      "A moderate-strength continental amber lager with a soft, smooth maltiness and a balanced, moderate bitterness, yet finishing relatively dry. The malt flavor is clean, bready-rich, and somewhat toasty, with an elegant impression derived from quality base malts and process, not specialty malts or adjuncts."
    ],
    [
      "Overall Impression",
      "A moderate-strength continental amber lager with a soft, smooth maltiness and a balanced, moderate bitterness, yet finishing relatively dry. The malt flavor is clean, bready-rich, and somewhat toasty, with an elegant impression derived from quality base malts and process, not specialty malts or adjuncts."
    ],
    [
      "Overall Impression",
      "A moderately colored, well-attenuated, bitter beer with a rich maltiness balancing a strong bitterness. Light and spicy hop character complements the malt. A dry beer with a firm body and smooth palate."
    ],
    [
      "Overall Impression",
      "A young, fresh Helles, so while still a malty, fully-attenuated Pils malt showcase, the hop character (aroma, flavor and bitterness) is more pronounced, and the beer is cloudy, often with some level of diacetyl, and possibly has some green apple and/or other yeast-derived notes. As with the traditional Helles, the Keller version is still a beer intended to be drunk by the liter, so overall it should remain a light, refreshing, easy drinking golden lager."
    ],
    [
      "Overall Impression",
      "A traditional malty brown lager from Bavaria. Deeply toasted, bready malt flavors without any roasty or burnt flavors. Smooth and rich, with a restrained bitterness and a relatively dry finish that allows for drinking in quantity."
    ],
    [
      "Overall Impression",
      "A traditional malty brown lager from Bavaria. Deeply toasted, bready malt flavors without any roasty or burnt flavors. Smooth and rich, with a restrained bitterness and a relatively dry finish that allows for drinking in quantity."
    ],
    [
      "Overall Impression",
      "A dark German lager that balances roasted yet smooth malt flavors with moderate hop bitterness. The lighter body, dryness, and lack of a harsh, burnt, or heavy aftertaste helps make this beer quite drinkable."
    ],
    [
      "Overall Impression",
      "A strong, rich, and very malty German lager that can have both pale and dark variants. The darker versions have more richly-developed, deeper malt flavors, while the paler versions have slightly more hops and dryness."
    ],
    [
      "Overall Impression",
      "A strong, rich, and very malty German lager that can have both pale and dark variants. The darker versions have more richly-developed, deeper malt flavors, while the paler versions have slightly more hops and dryness."
    ],
    [
      "Overall Impression",
      "A strong, full-bodied, rich, and malty dark German lager often with a viscous quality and strong flavors. Even though flavors are concentrated, the alcohol should be smooth and warming, not burning."
    ],
    [
      "Overall Impression",
      "A strong, dark, malty beer with different interpretations within the Baltic region. Smooth, warming, and richly malty, with complex dark fruit flavors and a roasted flavor without burnt notes."
    ],
    [
      "Overall Impression",
      "A pale, refreshing, lightly-hopped German wheat beer with high carbonation, dry finish, fluffy mouthfeel, and a distinctive banana-and-clove weizen yeast fermentation profile."
    ],
    [
      "Overall Impression",
      "A pale, refreshing, lightly-hopped German wheat beer with high carbonation, dry finish, fluffy mouthfeel, and a distinctive banana-and-clove weizen yeast fermentation profile."
    ],
    [
      "Overall Impression",
      "A moderately dark German wheat beer with a distinctive banana-and-clove weizen yeast fermentation profile, supported by a toasted bread or caramel malt flavor. Highly carbonated and refreshing, with a creamy, fluffy texture and light finish."
    ],
    [
      "Overall Impression",
      "A strong and malty German wheat beer combining the best wheat and yeast flavors of a Weissbier with the rich maltiness, strength, and body of a Bock. The style range includes Bock and Doppelbock strength, with variations for pale and dark color."
    ],
    [
      "Overall Impression",
      "Low gravity, alcohol, and carbonation make this an easy-drinking session beer. The malt profile can vary in flavor and intensity, but should never override the overall bitter impression. Drinkability is a critical component of the style."
    ],
    [
      "Overall Impression",
      "Low gravity, alcohol, and carbonation make this an easy-drinking session beer. The malt profile can vary in flavor and intensity, but should never override the overall bitter impression. Drinkability is a critical component of the style."
    ],
    [
      "Overall Impression",
      "A flavorful, yet refreshing, session beer. Some examples can be more malt balanced, but this should not override the overall bitter impression. Drinkability is a critical component of the style."
    ],
    [
      "Overall Impression",
      "An average-strength to moderately-strong British bitter ale. The balance may vary between fairly even between malt and hops to somewhat bitter. Drinkability is a critical component of the style. A rather broad style that allows for considerable interpretation by the brewer."
    ],
    [
      "Overall Impression",
      "A hop-forward, average-strength to moderately-strong pale bitter. Drinkability and a refreshing quality are critical components of the style, as it was initially a summer seasonal beer."
    ],
    [
      "Overall Impression",
      "A hop-forward, average-strength to moderately-strong pale bitter. Drinkability and a refreshing quality are critical components of the style, as it was initially a summer seasonal beer."
    ],
    [
      "Overall Impression",
      "A well-balanced, pale, highly-carbonated, and refreshing ale suitable for drinking in a hot climate. Fairly bitter, with a moderate herbal-spicy hop and pome fruit ester profile. Smooth, neutral malt flavors with a fuller body but a crisp, highly-attenuated finish."
    ],
    [
      "Overall Impression",
      "A bitter, moderately-strong, very well-attenuated pale British ale with a dry finish and a hoppy aroma and flavor. Classic British ingredients provide the most authentic flavor profile."
    ],
    [
      "Overall Impression",
      "A dark, low-gravity, malt-focused British session ale readily suited to drinking in quantity. Refreshing, yet flavorful for its strength, with a wide range of dark malt or dark sugar expression."
    ],
    [
      "Overall Impression",
      "A dark, low-gravity, malt-focused British session ale readily suited to drinking in quantity. Refreshing, yet flavorful for its strength, with a wide range of dark malt or dark sugar expression."
    ],
    [
      "Overall Impression",
      "A malty, caramelly, brown British ale without the roasted flavors of a Porter. Balanced and flavorful, but usually a little stronger than most average UK beers."
    ],
    [
      "Overall Impression",
      "A moderate-strength dark brown English ale with a restrained roasty, bitter character. May have a range of roasted flavors, generally without burnt qualities, and often has a malty chocolate and caramel profile."
    ],
    [
      "Overall Impression",
      "A low-alcohol, malty beer with light caramel, toast, toffee, and fruit flavors. A slight roast dryness offsets the residual sweetness in the finish, with the bitterness perceived only to keep the beer from being cloying."
    ],
    [
      "Overall Impression",
      "A low-alcohol, malty beer with light caramel, toast, toffee, and fruit flavors. A slight roast dryness offsets the residual sweetness in the finish, with the bitterness perceived only to keep the beer from being cloying."
    ],
    [
      "Overall Impression",
      "A lower-alcohol, malty beer with light caramel, toast, toffee, and fruity flavors. A slight roast dryness offsets the residual sweetness in the finish, with the bitterness perceived only to keep the beer from being cloying."
    ],
    [
      "Overall Impression",
      "A moderate-strength, malty beer with light caramel, toast, toffee, and fruit flavors. A slight roast dryness offsets the residual sweetness in the finish, with the bitterness perceived only to keep the beer from being cloying."
    ],
    [
      "Overall Impression",
      "An easy-drinking pint, often with subtle flavors. Slightly malty in the balance sometimes with an initial soft toffee or caramel sweetness, a slightly grainy-biscuity palate, and a touch of roasted dryness in the finish. Some versions can emphasize the caramel and sweetness more, while others will favor the grainy palate and roasted dryness."
    ],
    [
      "Overall Impression",
      "An easy-drinking pint, often with subtle flavors. Slightly malty in the balance sometimes with an initial soft toffee or caramel sweetness, a slightly grainy-biscuity palate, and a touch of roasted dryness in the finish. Some versions can emphasize the caramel and sweetness more, while others will favor the grainy palate and roasted dryness."
    ],
    [
      "Overall Impression",
      "A black beer with a pronounced roasted flavor, often similar to coffee. The balance can range from fairly even to quite bitter, with the more balanced versions having a little malty sweetness and the bitter versions being quite dry. Draught versions typically are creamy from a nitro pour, but bottled versions will not have this dispense-derived character. The roasted flavor"
    ],
    [
      "Overall Impression",
      "A fuller-bodied black beer with a pronounced roasted flavor, often similar to coffee and dark chocolate with some malty complexity. The balance can range from moderately bittersweet to bitter, with the more balanced versions having up to moderate malty richness and the bitter versions being quite dry."
    ],
    [
      "Overall Impression",
      "A very dark, sweet, full-bodied, slightly roasty stout that can suggest coffee-and-cream, or sweetened espresso."
    ],
    [
      "Overall Impression",
      "A very dark, sweet, full-bodied, slightly roasty stout that can suggest coffee-and-cream, or sweetened espresso."
    ],
    [
      "Overall Impression",
      "A dark, roasty, full-bodied stout with enough sweetness to support the oat backbone. The sweetness, balance, and oatmeal impression can vary considerably."
    ],
    [
      "Overall Impression",
      "A very dark, sweet, fruity, moderately strong stout with smooth, roasty flavors, yet no burnt harshness."
    ],
    [
      "Overall Impression",
      "A very dark, rich, moderately strong, fairly dry stout with prominent roast flavors."
    ],
    [
      "Overall Impression",
      "An ale of respectable alcoholic strength, traditionally bottled-conditioned and cellared. Can have a wide range of interpretations, but most will have varying degrees of malty richness, late hops and bitterness, fruity esters, and alcohol warmth. The malt and adjunct flavors and intensity can vary widely, but any combination should result in an agreeable palate experience."
    ],
    [
      "Overall Impression",
      "An ale of respectable alcoholic strength, traditionally bottled-conditioned and cellared. Can have a wide range of interpretations, but most will have varying degrees of malty richness, late hops and bitterness, fruity esters, and alcohol warmth. The malt and adjunct flavors and intensity can vary widely, but any combination should result in an agreeable palate experience."
    ],
    [
      "Overall Impression",
      "A stronger-than-average English ale, though usually not as strong or rich as an English Barley Wine, but usually malty. Warming. Shows positive maturation effects of a well-kept, aged beer."
    ],
    [
      "Overall Impression",
      "Rich, sweet malt depth with caramel, toffee, and fruity flavors. Full-bodied and chewy, with warming alcohol. Restrained bitterness, but not cloying or syrupy."
    ],
    [
      "Overall Impression",
      "A strong and richly malty ale with a pleasant fruity or hoppy depth. A wintertime sipper with a full, chewy body and warming alcohol."
    ],
    [
      "Overall Impression",
      "Easy-drinking, approachable, malt-oriented American craft beer, often with interesting fruit, hop, or character malt notes. Well-balanced and clean, is a refreshing pint without aggressive flavors."
    ],
    [
      "Overall Impression",
      "Easy-drinking, approachable, malt-oriented American craft beer, often with interesting fruit, hop, or character malt notes. Well-balanced and clean, is a refreshing pint without aggressive flavors."
    ],
    [
      "Overall Impression",
      "An average-strength, hop-forward, pale American craft beer with sufficient supporting malt to make the beer balanced and drinkable. The clean hop presence can reflect classic or modern American or New World hop varieties with a wide range of characteristics."
    ],
    [
      "Overall Impression",
      "An amber, hoppy, moderate-strength American craft beer with a malty caramel flavor. The balance can vary quite a bit, with some versions being fairly malty and others being aggressively hoppy. Hoppy and bitter versions should not have clashing flavors with the caramel malt profile."
    ],
    [
      "Overall Impression",
      "An amber, hoppy, moderate-strength American craft beer with a malty caramel flavor. The balance can vary quite a bit, with some versions being fairly malty and others being aggressively hoppy. Hoppy and bitter versions should not have clashing flavors with the caramel malt profile."
    ],
    [
      "Overall Impression",
      "A toasty and caramelly, fairly bitter, standard-strength beer with an interesting fruitiness and rustic, woody hop character. Smooth and well carbonated."
    ],
    [
      "Overall Impression",
      "A malty but hoppy standard-strength American ale frequently with chocolate and caramel flavors. The hop flavor and aroma complement and enhance the malt rather than clashing with it."
    ],
    [
      "Overall Impression",
      "A malty, bitter, and often somewhat hoppy dark beer with a balanced, roasted, and frequently chocolatey character."
    ],
    [
      "Overall Impression",
      "A malty, bitter, and often somewhat hoppy dark beer with a balanced, roasted, and frequently chocolatey character."
    ],
    [
      "Overall Impression",
      "A fairly strong, highly roasted, bitter, hoppy dark stout. The body and dark flavors typical of stouts with a more aggressive American hop character and bitterness."
    ],
    [
      "Overall Impression",
      "An intensely-flavored, very strong, very dark stout with a broad range of interpretations. Roasty-burnt malt with a depth of dark or dried fruit flavors, and a warming, bittersweet finish. Despite the intense flavors, the components need to meld together to create a complex, harmonious beer, not a hot mess – sometimes only accomplished with age."
    ],
    [
      "Overall Impression",
      "A decidedly hoppy and bitter, moderately strong, pale American ale. The balance is hop-forward, with a clean fermentation profile, dryish finish, and clean, supporting malt allowing a creative range of hop character to shine through."
    ],
    [
      "Overall Impression",
      "A decidedly hoppy and bitter, moderately strong, pale American ale. The balance is hop-forward, with a clean fermentation profile, dryish finish, and clean, supporting malt allowing a creative range of hop character to shine through."
    ],
    [
      "Overall Impression",
      "Recognizable as an IPA by balance – a hop-forward, bitter, dryish beer – with something else present to distinguish it from the standard categories. Should have good drinkability, regardless of the form. Excessive harshness and heaviness are typically faults, as are strong flavor clashes between the hops and the other specialty ingredients."
    ],
    [
      "Overall Impression",
      "A dry, hoppy IPA with fruitiness and spiciness of Belgian yeast. Often lighter in color and more attenuated, similar to a Belgian Tripel that has been brewed with more hops."
    ],
    [
      "Overall Impression",
      "A beer with the dryness, hop-forward balance, and flavor characteristics of an American IPA, but darker in color. Darker malts add a gentle and supportive flavor, not a strongly roasted or burnt character."
    ],
    [
      "Overall Impression",
      "A very pale, hop-forward American IPA variant with a bone-dry finish, very high carbonation, and a restrained bitterness level. Can be suggestive of a sparkling white wine or Champagne. The hop character is modern, and emphasizes flavor and aroma dimensions."
    ],
    [
      "Overall Impression",
      "Hoppy, bitter, and moderately strong like an American IPA, but with some caramel, toffee, or fruit character as in an American Amber Ale. Retaining the dryish finish and lean body that makes IPAs so drinkable, a Red IPA is a little more flavorful and malty than an American IPA without being sweet or heavy."
    ],
    [
      "Overall Impression",
      "An American IPA with spicy, grainy rye malt. The rye gives a bready and peppery flavor, a creamier body, and a dry, grainy finish."
    ],
    [
      "Overall Impression",
      "A fruity, spicy, refreshing version of an American IPA, but with a lighter color, less body, and featuring the distinctive yeast or spice additions typical of a Witbier."
    ],
    [
      "Overall Impression",
      "An American IPA with intense fruit flavors and aromas, a soft body, smooth mouthfeel, and often opaque with substantial haze. Less perceived bitterness than traditional IPAs but always massively hop-forward."
    ],
    [
      "Overall Impression",
      "An intensely hoppy, fairly strong, bitter pale ale without the big, rich, complex maltiness, residual sweetness, and body of an American Barleywine. Strongly hopped, but clean, dry, and lacking harshness. Despite showing its strength, drinkability is an important consideration."
    ],
    [
      "Overall Impression",
      "An intensely hoppy, fairly strong, bitter pale ale without the big, rich, complex maltiness, residual sweetness, and body of an American Barleywine. Strongly hopped, but clean, dry, and lacking harshness. Despite showing its strength, drinkability is an important consideration."
    ],
    [
      "Overall Impression",
      "A malty, bitter, and strong American Ale fitting in the space between American Barleywine, Double IPA, and Red IPA. The malty and hoppy flavors can be quite strong, but are generally in balance."
    ],
    [
      "Overall Impression",
      "A very strong, malty, hoppy, bitter American ale with a rich palate, full mouthfeel, and warming aftertaste, suitable for contemplative sipping."
    ],
    [
      "Overall Impression",
      "A richly textured, high alcohol sipping beer with a significant grainy, bready flavor, and a sleek body. The emphasis is first on the bready, wheaty flavors with malt, hops, fruity yeast, and alcohol complexity."
    ],
    [
      "Overall Impression",
      "A very pale, refreshing, low-alcohol German wheat beer with a clean lactic sourness and a very high carbonation level. A light bread dough malt flavor supports the sourness, which shouldn’t seem artificial. A gentle fruitiness is found in the best examples."
    ],
    [
      "Overall Impression",
      "A very pale, refreshing, low-alcohol German wheat beer with a clean lactic sourness and a very high carbonation level. A light bread dough malt flavor supports the sourness, which shouldn’t seem artificial. A gentle fruitiness is found in the best examples."
    ],
    [
      "Overall Impression",
      "A sour and fruity oak-aged reddish-brown Belgian-style ale with supportive toasty malt flavors and fruit complexity. The dry, tannic finish supports the suggestion of a vintage red wine."
    ],
    [
      "Overall Impression",
      "A malty, fruity, aged, somewhat sour Belgian-style brown ale with a caramel-chocolate malt flavor, and often substantial alcohol."
    ],
    [
      "Overall Impression",
      "A fairly sour, often moderately funky, wild Belgian wheat beer with sourness taking the place of hop bitterness in the balance. Traditionally served uncarbonated as a café drink."
    ],
    [
      "Overall Impression",
      "A very refreshing, highly carbonated, pleasantly sour but balanced wild Belgian wheat beer. The wild beer character can be complex and varied, combining sour, funky, and fruity flavors."
    ],
    [
      "Overall Impression",
      "A complex, refreshing, pleasantly sour Belgian wheat beer blending a complementary fermented fruit character with a sour, funky Gueuze."
    ],
    [
      "Overall Impression",
      "A very pale, refreshing, low-alcohol German wheat beer with a clean lactic sourness and a very high carbonation level. A light bread dough malt flavor supports the sourness, which shouldn’t seem artificial. A gentle fruitiness is found in the best examples."
    ],
    [
      "Overall Impression",
      "A tart, lightly-bittered historical central European wheat beer with a distinctive but restrained salt and coriander character. Very refreshing, with a dry finish, high carbonation, and bright flavors."
    ],
    [
      "Overall Impression",
      "A pale, hazy Belgian wheat beer with spices accentuating the yeast character. A delicate, lightly spiced, moderate-strength ale that is a refreshing summer drink with its high carbonation, dry finish, and light hopping."
    ],
    [
      "Overall Impression",
      "A pale, hazy Belgian wheat beer with spices accentuating the yeast character. A delicate, lightly spiced, moderate-strength ale that is a refreshing summer drink with its high carbonation, dry finish, and light hopping."
    ],
    [
      "Overall Impression",
      "A top-fermented, all malt, average strength Belgian ale that is moderately bitter, not dry-hopped, and without strong flavors. The copper-colored beer lacks the aggressive yeast character or sourness of many Belgian beers, but has a well-balanced, malty, fruity, and often bready and toasty profile."
    ],
    [
      "Overall Impression",
      "A family of smooth, fairly strong, malty, lagered artisanal French beer with a range of malt flavors appropriate for the blond, amber, or brown color. All are malty yet dry, with clean flavors. Darker versions have more malt character, while paler versions can have more hops while still remaining malt-focused beers."
    ],
    [
      "Overall Impression",
      "A golden, moderately-strong Belgian ale with a pleasantly subtle citrusy-spicy yeast complexity, smooth malty palate, and dry, soft finish."
    ],
    [
      "Overall Impression",
      "A golden, moderately-strong Belgian ale with a pleasantly subtle citrusy-spicy yeast complexity, smooth malty palate, and dry, soft finish."
    ],
    [
      "Overall Impression",
      "A family of refreshing, highly attenuated, hoppy, and fairly bitter Belgian ales with a very dry finish and high carbonation. Characterized by a fruity, spicy, sometimes phenolic fermentation profile, and the use of cereal grains and sometimes spices for complexity. Several variations in strength and color exist."
    ],
    [
      "Overall Impression",
      "A very pale, highly attenuated, strong Belgian ale that is more fruity and hoppy than spicy. Complex and delicate, the dry finish, light body, and high carbonation accentuate the yeast and hop character. Sparkling carbonation and effervescent, forming a rocky white head."
    ],
    [
      "Overall Impression",
      "A pale, bitter, highly attenuated and well carbonated Trappist ale, showing a fruity-spicy Trappist yeast character, a spicy-floral hop profile, and a soft, supportive grainy-sweet malt palate."
    ],
    [
      "Overall Impression",
      "A pale, bitter, highly attenuated and well carbonated Trappist ale, showing a fruity-spicy Trappist yeast character, a spicy-floral hop profile, and a soft, supportive grainy-sweet malt palate."
    ],
    [
      "Overall Impression",
      "A deep reddish-copper, moderately strong, malty, complex Belgian ale with rich malty flavors, dark or dried fruit esters, and light alcohol blended together in a malty presentation that still finishes fairly dry."
    ],
    [
      "Overall Impression",
      "A strong, pale, somewhat spicy Belgian ale with a pleasant rounded malt flavor, firm bitterness, and dry finish. Quite aromatic, with spicy, fruity, and light alcohol notes combining with the supportive clean malt character to produce a surprisingly drinkable beverage considering the high alcohol content."
    ],
    [
      "Overall Impression",
      "A dark, complex, very strong Belgian ale with a delicious blend of malt richness, dark fruit flavors, and spicy notes. Complex, rich, smooth, and dangerous."
    ],
    [
      "Overall Impression",
      "An unfiltered, unpasteurized, fully-attenuated German lager traditionally served from lagering vessels. May be a little richer, more robust, and rustic than the base styles. A fresh beer without fermentation defects associated with young, green (unfinished) beer."
    ],
    [
      "Overall Impression",
      "An unfiltered, unpasteurized, fully-attenuated German lager traditionally served from lagering vessels. May be a little richer, more robust, and rustic than the base styles. A fresh beer without fermentation defects associated with young, green (unfinished) beer."
    ],
    [
      "Overall Impression",
      "A clean, dry, refreshing, slightly malty dark beer with high carbonation. Mild-tasting, with light toast and caramel flavors, served very fresh as a sessionable saloon beer."
    ],
    [
      "Overall Impression",
      "A sour, smoked, lower-gravity historical central European wheat beer. Complex yet refreshing character due to high attenuation and carbonation, along with low bitterness and moderate sourness."
    ],
    [
      "Overall Impression",
      "A luscious, sweet, malty, low-alcohol dark brown ale, with caramel and toffee malt complexity and a sweet-tasting finish."
    ],
    [
      "Overall Impression",
      "A low-gravity, bitter, oak-smoked historical central European wheat beer with a clean fermentation profile and no sourness. Highly carbonated, dry, crisp, and refreshing."
    ],
    [
      "Overall Impression",
      "A bitter and hoppy pale American adjunct lager, often with a robust, corny flavor profile, although more crisp and neutral-tasting versions exist."
    ],
    [
      "Overall Impression",
      "A historical American adaptation of English Porter by German immigrants using American ingredients, including adjuncts."
    ],
    [
      "Overall Impression",
      "A Dunkles Weissbier made with rye rather than wheat, but with a greater body and light finishing hops. The rye gives a bready and peppery flavor, a creamy body, and a dry, grainy finish that blends with the distinctive banana-and-clove weizen yeast character."
    ],
    [
      "Overall Impression",
      "A sweet, heavy, strong traditional Finnish farmhouse beer usually with rye and juniper, and a banana-clove yeast character."
    ],
    [
      "Overall Impression",
      "Most often drier and fruitier than the base style suggests. Fruity or funky notes range from low to high, depending on the age of the beer and strains of Brett used. May possess a light non-lactic acidity."
    ],
    [
      "Overall Impression",
      "Most often drier and fruitier than the base style suggests. Fruity or funky notes range from low to high, depending on the age of the beer and strains of Brett used. May possess a light non-lactic acidity."
    ],
    [
      "Overall Impression",
      "A sour and funky version of a base style of beer."
    ],
    [
      "Overall Impression",
      "An American Wild Ale with fruit, herbs, spices, or other Specialty-Type Ingredients."
    ],
    [
      "Overall Impression",
      "A pale, refreshing, sour beer with a clean lactic sourness. A gentle, pale malt flavor supports the lemony sourness with moderate fruity esters."
    ],
    [
      "Overall Impression",
      "A pleasant integration of fruit with beer, but still recognizable as beer. The fruit character should be evident but in balance with the beer, not so forward as to suggest an artificial product."
    ],
    [
      "Overall Impression",
      "A pleasant integration of fruit with beer, but still recognizable as beer. The fruit character should be evident but in balance with the beer, not so forward as to suggest an artificial product."
    ],
    [
      "Overall Impression",
      "A tasteful union of fruit, spice, and beer, but still recognizable as beer. The fruit and spice character should each be evident but in balance with the beer, not so forward as to suggest an artificial product."
    ],
    [
      "Overall Impression",
      "A appealing combination of fruit, sugar, and beer, but still recognizable as a beer. The fruit and sugar character should both be evident but in balance with the beer, not so forward as to suggest an artificial product."
    ],
    [
      "Overall Impression",
      "Combines the profile of a sparkling wine and a relatively neutral base beer allowing the aromatic qualities of the grape to blend pleasantly with hop and yeast aromatics. Can be in a range from refreshing to complex."
    ],
    [
      "Overall Impression",
      "An appealing fusion of spices, herbs, or vegetables (SHVs) and beer, but still recognizable as beer. The SHV character should be evident but in balance with the beer, not so forward as to suggest an artificial product."
    ],
    [
      "Overall Impression",
      "An appealing fusion of spices, herbs, or vegetables (SHVs) and beer, but still recognizable as beer. The SHV character should be evident but in balance with the beer, not so forward as to suggest an artificial product."
    ],
    [
      "Overall Impression",
      "A malty, spiced beer that often has a moderately rich body and slightly warming finish suggesting a good accompaniment for the cool fall season, and often evocative of harvest or Thanksgiving traditions."
    ],
    [
      "Overall Impression",
      "A stronger, darker, spiced beer that often has a rich body and warming finish suggesting a good accompaniment for the cold winter season."
    ],
    [
      "Overall Impression",
      "An appealing combination of spices, herbs, or vegetables (SHVs), sugars, and beer, but still recognizable as beer. The SHV and sugar character should both be evident but in balance with the beer, not so forward as to suggest an artificial product."
    ],
    [
      "Overall Impression",
      "A base beer enhanced by or featuring the character of additional grains. The specific character depends greatly on the added grains."
    ],
    [
      "Overall Impression",
      "A base beer enhanced by or featuring the character of additional grains. The specific character depends greatly on the added grains."
    ],
    [
      "Overall Impression",
      "A tasteful integration of sugar and beer, but still recognizable as beer. The sugar character should both be evident and in balance with the beer, not so forward as to suggest an artificial product."
    ],
    [
      "Overall Impression",
      "A well-balanced fusion of the malt and hops of the base beer style with a pleasant and agreeable smoke character."
    ],
    [
      "Overall Impression",
      "A well-balanced fusion of the malt and hops of the base beer style with a pleasant and agreeable smoke character."
    ],
    [
      "Overall Impression",
      "A well-balanced fusion of the malt and hops of the base specialty beer style with a pleasant and agreeable smoke character."
    ],
    [
      "Overall Impression",
      "A pleasant enhancement of the base beer style with the characteristics from aging in contact with wood. The best examples will be smooth, flavorful, well-balanced, and well-aged."
    ],
    [
      "Overall Impression",
      "A pleasant enhancement of the base beer style with the characteristics from aging in contact with wood. The best examples will be smooth, flavorful, well-balanced, and well-aged."
    ],
    [
      "Overall Impression",
      "An elevation of the base beer style with characteristics from aging in contact with wood, including alcoholic products previously in contact with the wood. The best examples will be smooth, flavorful, well-balanced, and well-aged."
    ],
    [
      "Overall Impression",
      "Based on declared beer."
    ],
    [
      "Overall Impression",
      "Based on declared clone beer."
    ],
    [
      "Overall Impression",
      "Based on declared beer."
    ],
    [
      "Overall Impression",
      "Based on the declared Base Styles, methods, and ingredients. As with all Specialty-Type Beers, the resulting combination of beer styles needs to be harmonious and balanced, and be pleasant to drink."
    ],
    [
      "Overall Impression",
      "In well-made examples of the style, the fruit is both distinctive and well-incorporated into the honey-sweet-acid-tannin-alcohol balance of the mead. Some of the best strong examples have the taste and aroma of an aged Calvados (apple brandy from northern France), while subtle, dry versions can taste similar to many fine white wines. There should be an appealing blend of the fruit and honey character but not necessarily an even balance. Generally a good tannin-sweetness balance is desired, though very dry and very sweet examples do exist."
    ],
    [
      "Overall Impression",
      "In well-made examples of the style, the grape is both distinctively vinous and well-incorporated into the honey-sweet-acid-tannin-alcohol balance of the mead. White and red versions can be quite different, and the overall impression should be characteristic of the type of grapes used and suggestive of a similar variety wine. There should be an appealing blend of the fruit and honey character but not necessarily an even balance. Generally a good tannin-sweetness balance is desired, though very dry and very sweet examples do exist."
    ],
    [
      "Overall Impression",
      "In well-made examples of the style, the fruit is both distinctive and well-incorporated into the honey-sweet-acid-tannin-alcohol balance of the mead. Different types of fruit can result in widely different characteristics; allow for a variation in the final product."
    ],
    [
      "Overall Impression",
      "In well-made examples of the style, the fruits and spices are both distinctive and well-incorporated into the honey-sweet-acid-tannin-alcohol balance of the mead. Different types of fruits and spices can result in widely different characteristics; allow for significant variation in the final product."
    ],
    [
      "Overall Impression",
      "In well-made examples of the style, the fruits and spices are both distinctive and well-incorporated into the honey-sweet-acid-tannin-alcohol balance of the mead. Different types of fruits and spices can result in widely different characteristics; allow for significant variation in the final product."
    ],
    [
      "Overall Impression",
      "A harmonious blend of mead and beer, with the distinctive characteristics of both. A wide range of results are possible, depending on the base style of beer, variety of honey and overall sweetness and strength. Beer flavors tend to somewhat mask typical honey flavors found in other meads."
    ],
    [
      "Overall Impression",
      "This mead should exhibit the character of all of the ingredients in varying degrees, and should show a good blending or balance between the various flavor elements. Whatever ingredients are included, the result should be identifiable as a honey-based fermented beverage."
    ],
    [
      "Overall Impression",
      "A refreshing drink of some substance – not bland or watery. Sweet ciders must not be cloying. Dry ciders must not be too austere."
    ],
    [
      "Overall Impression",
      "Generally dry, full-bodied, austere. Complex flavor profile, long finish."
    ],
    [
      "Overall Impression",
      "Mild. Medium to medium-sweet. Still to lightly sparkling. Only very slight acetification is acceptable. Mousiness, ropy/oily characters are serious faults."
    ],
    [
      "Overall Impression",
      "Substantial body and character. Typically relatively dry, but can be somewhat sweet if in balance and not containing hot alcohol."
    ],
    [
      "Overall Impression",
      "Like a white wine with complex flavors. The apple character must marry with the added fruit so that neither one dominates the other."
    ]
  ]
  //titulo :string | undefined;
 //estilo = ' ';
  nota = 'Nota';
  data1=this.sharedDataService.data1
  informacion: string[] | undefined;
  //public titulo: string | undefined;
  //public estilo: string | undefined;
  constructor(private sharedDataService:SharedDataService) { }
  titulo=this.sharedDataService.titulo 
 estilo=this.sharedDataService.estilo
posicionSeleccionada = this.sharedDataService.data1.indexOf(this.estilo);
selectedOption: any; // Agrega esta línea
descripcionSeleccionada: string | null = null;
disableSelect: boolean = false;

onOptionSelect(): void {
  const posicionSeleccionada = this.data1.indexOf(this.selectedOption);
  if (posicionSeleccionada !== -1 && posicionSeleccionada < this.data2.length) {
    const informacion = this.data2[posicionSeleccionada][1];
    this.descripcionSeleccionada = informacion;
  } else {
    this.descripcionSeleccionada = null;
  }
}
  ngOnInit(): void {
    
    const posicionSeleccionada = this.sharedDataService.data1.indexOf(this.estilo);
    if (posicionSeleccionada !== -1 && posicionSeleccionada < this.data2.length) {
      this.informacion = this.data2[posicionSeleccionada];
    } else {
      this.informacion = undefined;
    }
  }

}
