class App{
     constructor(){
          this.spaceship = null;
     };

     start(){
          this.createSpaceship();

          let chosenOption;
          do {
               chosenOption =this.showMenu();
               this.redirectFeature(chosenOption);
          } while (chosenOption != "3");

          this.printAndExit();
     }

     createSpaceship(){
          let spaceshipName = prompt("Digite o nome da espaçonave:");
          let crewQuantity = prompt("Digite a quantidade de tripulantes:");
          let spaceshipType = this.askForSpaceshipType();
     
          if (spaceshipType == "1") {
               let weaponsQuantity = prompt("Quantidade de armas disponíveis na espaçonave:");
               this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity,spaceshipType, weaponsQuantity);
          } else {
               let sitsQuantity = prompt("Quantidade de acentos comportados pela espaçonave");
               this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity,spaceshipType, sitsQuantity);
          }
     };

     askForSpaceshipType(){
          let type;
          while(!["1", "2"].includes(type)){
               type= prompt("Informe o tipo da espaçonave:\n" +
               "1- Espaçonave de batalha\n" +
               "2- Espaçonave de transporte");
          };
          return type;
     };

     showMenu(){
          let menuMessage = "Informe a opção desejada:\n" +
                            "1- Acelerar a espaçonave\n" +
                            "2- Trocar a espaçonave\n" +
                            "3- imprimir e sair";
          
          let chosenOption = prompt(menuMessage);

          while(!["1", "2", "3"].includes(chosenOption)){
               chosenOption = prompt(menuMessage);
          }
          return chosenOption;
     };

     redirectFeature(option){
          switch (option) {
               case "1":
                    this.accelerateSpaceship()                    
                    break;
               case "2":
                    this.createSpaceship();
                    break;
               default:
                    break;
          };
     };

     accelerateSpaceship(){
          let acceleration = Number(prompt("Digite a aceleração desejada em Km/s"));
          this.spaceship.speedUp(acceleration);
     };

     printAndExit(){
          alert(`Nome: ${this.spaceship.name}\n` + 
                `Quantidade de tripulantes: ${this.spaceship.crewQuantity}\n` +
                `Velicidade atual: ${this.spaceship.currentyVelocity}`);
     }
};




               


