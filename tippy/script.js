const moveTo = new MoveTo();
const button = document.querySelectorAll("button");
button.forEach(btn => moveTo.registerTrigger(btn));

tippy('[data-tippy-content]');

IMask(
    document.getElementById('phone'),
    {
      mask: '+{7}(000) 000-00-00'
    }
  );

IMask(
  document.getElementById('age'),
  {
    mask: Number,
    min: 0,
    max: 110,
    thousandsSeparator: ' '
  }
)

IMask(
  document.getElementById('date'),
  {
    mask: Date,
    min: new Date(1940, 0, 1),
    max: new Date(2023, 0, 1),
    lazy: false
  }
)