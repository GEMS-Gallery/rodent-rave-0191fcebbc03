import Nat "mo:base/Nat";

actor HamsterDance {
  stable var visitorCount : Nat = 0;

  public func incrementVisitorCount() : async Nat {
    visitorCount += 1;
    visitorCount
  };

  public query func getVisitorCount() : async Nat {
    visitorCount
  };
}
