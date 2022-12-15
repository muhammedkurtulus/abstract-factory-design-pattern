export  interface IPlayer {
  GetTopScorer(): string;
}

export  interface ITeam {
  GetTeamColor(): string;
}

export  interface IFootballFactory
{
    CreateTeam():ITeam;
    CreatePlayer():IPlayer;
}


export  class BundesLigaFactory implements IFootballFactory {
  public CreateTeam():ITeam {
      return new BorussiaDotmund();
  }

  public CreatePlayer(): IPlayer {
      return new BundesligaPlayer();
  }
}

export  class LaLigaFactory implements IFootballFactory
{
    public CreateTeam():ITeam
    {
        return new RealMadrid();
    }

    public CreatePlayer():IPlayer
    {
        return new LaLigaPlayer();
    }
}

export  class SerieAFactory implements IFootballFactory
{
    public CreateTeam():ITeam
    {
        return new Juventus();
    }

    public CreatePlayer():IPlayer
    {
        return new SerieAPlayer();
    }
}

export  class BorussiaDotmund implements ITeam
{
    public GetTeamColor():string
    {
        return "Black and Yellow";
    }
}

export  class Juventus implements ITeam
{
    public GetTeamColor():string
    {
        return "Black and White";
    }
}

export  class RealMadrid implements ITeam
{
    public GetTeamColor():string
    {
        return "Blue and White";
    }
}

export  class BundesligaPlayer implements IPlayer
{
    public GetTopScorer():string
    {
        return "Robert Lewandowski";
    }
}

export  class LaLigaPlayer implements IPlayer
{
    public GetTopScorer():string
    {
        return "Lionel Messi";
    }
}

export  class SerieAPlayer implements IPlayer
{
    public GetTopScorer():string
    {
        return "Cristiano Ronaldo";
    }
}


//   /**
//  * The Abstract Factory interface declares a set of methods that return
//  * different abstract products. These products are called a family and are
//  * related by a high-level theme or concept. Products of one family are usually
//  * able to collaborate among themselves. A family of products may have several
//  * variants, but the products of one variant are incompatible with products of
//  * another.
//  */
//   export interface AbstractFactory {
//     createProductA(): AbstractProductA;
  
//     createProductB(): AbstractProductB;
//   }
  
//   /**
//   * Concrete Factories produce a family of products that belong to a single
//   * variant. The factory guarantees that resulting products are compatible. Note
//   * that signatures of the Concrete Factory's methods return an abstract product,
//   * while inside the method a concrete product is instantiated.
//   */
//   export class ConcreteFactory1 implements AbstractFactory {
//     public createProductA(): AbstractProductA {
//         return new ConcreteProductA1();
//     }
  
//     public createProductB(): AbstractProductB {
//         return new ConcreteProductB1();
//     }
//   }
  
//   /**
//   * Each Concrete Factory has a corresponding product variant.
//   */
//   export class ConcreteFactory2 implements AbstractFactory {
//     public createProductA(): AbstractProductA {
//         return new ConcreteProductA2();
//     }
  
//     public createProductB(): AbstractProductB {
//         return new ConcreteProductB2();
//     }
//   }
  
//   /**
//   * Each distinct product of a product family should have a base interface. All
//   * variants of the product must implement this interface.
//   */
//   interface AbstractProductA {
//     usefulFunctionA(): string;
//   }
  
//   /**
//   * These Concrete Products are created by corresponding Concrete Factories.
//   */
//   class ConcreteProductA1 implements AbstractProductA {
//     public usefulFunctionA(): string {
//         return 'The result of the product A1.';
//     }
//   }
  
//   class ConcreteProductA2 implements AbstractProductA {
//     public usefulFunctionA(): string {
//         return 'The result of the product A2.';
//     }
//   }
  
//   /**
//   * Here's the the base interface of another product. All products can interact
//   * with each other, but proper interaction is possible only between products of
//   * the same concrete variant.
//   */
//   interface AbstractProductB {
//     /**
//      * Product B is able to do its own thing...
//      */
//     usefulFunctionB(): string;
  
//     /**
//      * ...but it also can collaborate with the ProductA.
//      *
//      * The Abstract Factory makes sure that all products it creates are of the
//      * same variant and thus, compatible.
//      */
//     anotherUsefulFunctionB(collaborator: AbstractProductA): string;
//   }
  
//   /**
//   * These Concrete Products are created by corresponding Concrete Factories.
//   */
//   class ConcreteProductB1 implements AbstractProductB {
  
//     public usefulFunctionB(): string {
//         return 'The result of the product B1.';
//     }
  
//     /**
//      * The variant, Product B1, is only able to work correctly with the variant,
//      * Product A1. Nevertheless, it accepts any instance of AbstractProductA as
//      * an argument.
//      */
//     public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
//         const result = collaborator.usefulFunctionA();
//         return `The result of the B1 collaborating with the (${result})`;
//     }
//   }
  
//   class ConcreteProductB2 implements AbstractProductB {
  
//     public usefulFunctionB(): string {
//         return 'The result of the product B2.';
//     }
  
//     /**
//      * The variant, Product B2, is only able to work correctly with the variant,
//      * Product A2. Nevertheless, it accepts any instance of AbstractProductA as
//      * an argument.
//      */
//     public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
//         const result = collaborator.usefulFunctionA();
//         return `The result of the B2 collaborating with the (${result})`;
//     }
//   }
