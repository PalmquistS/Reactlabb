# reactlabb
Labration (Deadline finns på pingpong)
Inledning
Ni ska Skapa en enkel rekryterings applikation med React.
Applikationen ska ha en lista med personer som kan se på startsidan och en knapp för att lägga till en ny person.

Steg för steg:
Skapa en ny mapp med namnet "reactlabb" på skrivborder.

Öpnna konsolen och ställ den i mappen.

Kör kommandot: npx create-react-app . för att generera ett nytt projekt.

Rensa koden genom att ta bort förutom App.ja och index.js i src mappen (glöm inte att ta bort imports).

Skapa en ny komponent med namnet "Emlpoyee".

Denna ka ta emot en prop med namnet EmployeesData.
Skapa en ny div som retuneras från den komponenten och där kan du presentera informationen hur du vill.

använd data som hämtas via EmployeesData prop, t.ex EmployeesData.name, EmployeesData.avatar .. osv.
Skapa en ny komponent med namnet "EmployeeList".

importera useState funktionen från react.
Deklarera ett nytt state med hjälp av useSate med data namnet "employess" och funktionen "setEmployess".

Detta statet ska vara en array och ska börja med 3 default personer t.ex:
 {
 name: "",
 email: "",
 phone: "",
 skills: "",
 avatar: "",
 }
Loopa igenom array:n med hjälp av .map funktionen och visa Emlpoyee komponenten för varje person.

Lägg till en ny knapp på EmployeeList komponenten och en onClick funktion med namnet "handleAddEmployee".

Deklarera handleAddEmployee funktionen och där ska "setEmployess" blir kallad och en ny person läggs till (hårda koda objektet).

Checkpoints
Appen ska ha två komponenter:

EmployeeList: Denna komponenten ska ha ett state där datan om olika personer lagras samt visa en lista med personer på sidan. (Tip: använd map)
Employee: Denna komponenten ska presentera varje person, den ska ta emot state data via en prop. (Statet ska skickas från EmployeeList).
Varje person ska ha name, email, phone, skills och avatar (titta på objektet nedan):

 {
 name: "",
 email: "",
 phone: "",
 skills: "",
 avatar: "",
 }
avatar är en bild, ni kan skriva en direkt länk till bilden. Bilder hittar ni här : https://imgur.com/a/TfuJ77a

Statet som finns på EmployeeList ska börja med 3 personer som default värde på statet.

EmployeeList ska han en knapp (Add Employee) som lägger till en ny person på listan, personens information kan ni hårda koda.

För betyget Godkänd krävs följande:
Appen ska vara en single page, bara en sida.
Ni har skapat Employee och EmployeeList som komponenter.
App komponenten (hela applikationen) ska bara ha en komponent (EmployeeList).
Statet som innehåller personernas data ska finnas på EmployeeList komponenten.
Employee komponenten ska presentera all information on personen D.v.s name, email, phone, skills och bilden (avatar).
Ni har använt inbyggda React funktioner (t.ex ingen direkt modifiering av statet med push .. osv).
node_modules ska ignoreras av git D.v.s den ska inte finnas med på github repo:t (lägg till mappen i .gitignore filen).
Inlämning:
Du ska endast lämna in en länk till github repo:t där koden finns (ingen zip/rar filer).
Tänk på att node_modules ska inte vara med på repo:t.
TIPS & Hjälp
Statet ska vara en array av objekt, [{},{},{}].
Använd useState(), map().
Avnänd object/array destruction och spread operator.
CSS koden hittar ni här: https://pastebin.com/gmpZimYZ
Länkar:
https://reactjs.org/docs/hooks-overview.html#state-hook
https://reactjs.org/docs/components-and-props.html#function-and-class-components
https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know
Challenges (betygsätts inte)
Den här är inte av laborationen och betygsätts inte.
För dig som gillar utmaningar och vill lära dig mer om att React, testa implementera följande funktioner:

Spara data med hjälp localstorage. (Medium)
Lägg till form där man fyller i nya personens information. (High)
Lägg till en ta bort funktion. (High)
Lägg till en update funktion, där man uppdaterar en person som finns redan. (Insane)
