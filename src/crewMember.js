class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive() {
    if (this.position === "Pilot" && this.currentShip !== "Looking for a Rig") {
      this.currentShip.warpDrive = "engaged"
    }
    else {return "had no effect"}
  }

  chargePhasers() {
    if (this.position === "Gunner" && this.currentShip !== "Looking for a Rig"){
      this.currentShip.phasersCharge = "charged"
    }


  }
}
