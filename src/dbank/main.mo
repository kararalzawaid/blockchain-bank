import Debug "mo:base/Debug";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";
import Text "mo:base/Text";

actor dbank {
  stable var currentValue = 300;
  let startTime = Time.now();
  // currentValue := 100;

  public func topUp(ammount : Nat) : async Text {
    currentValue += ammount;
    Debug.print(debug_show (currentValue));

    return debug_show (currentValue);
  };

  public func withDraw(ammount : Nat) : async Text {
    let value : Int = currentValue - ammount;
    if (value >= 0) {
      currentValue -= ammount;
      Debug.print(debug_show (currentValue));

      return debug_show (currentValue);
    } else {
      Debug.print("It is negative!.");

      return "It is negative!.";
    };
  };

  public query func checkBalance() : async Nat {
    return currentValue;
  };

  public query func getTime() : async Text {
    let currentTime = Time.now();

    let diffTime = (currentTime - startTime) / 1000000000;

    return debug_show (diffTime);
  };
};
