const Spaceship = (function(){

  let id = 1

  return class{
    constructor(name, crew, phasers, shields){
      this.id = id++
      this.name = name
      this.crew = crew
      this.phasers = phasers
      this.shields = shields
      this.cloaked = false
      this.warpDrive = 'disengaged'
      this.crew.length === 0 ? (this.docked = true) : (this.docked = false)
      this.phasersCharge = 'uncharged'
      if(this.crew.length > 0){
        this.crew.forEach(member => member.currentShip = this )
      }

    }

  }
})();
