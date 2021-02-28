describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', '33').trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume icon changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', '33').trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    })
  })

  // TODO
  it('Image and sound changes when selecting party horn', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });


  it('Volume image changes to level 3 when increasing volumes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
    });
  });

  it('Volume image changes to level 2 when increasing volumes', () => {
    cy.get('#volume-number').clear().type('60');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    });
  });

  it('Volume image changes to level 1 when increasing volumes', () => {
    cy.get('#volume-number').clear().type('20');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    });
  });


  it('Horn button disabled when input is empty or invalid', () => {
    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    })
  });

  it('an error is shown when input number outside of the given range', () => {
    cy.get('#volume-number').clear().type('110');
    cy.get('#volume-number').then(($el) => {
      expect($el).should('has.css',':invalid');
    });
  });

});
