import React, { useEffect } from 'react'

export default ({ id }) => {
  const loadWidget = () => {

    var exampleCallback = function () {
      console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
      // Required
      widgetType: 'checkout',
      eventId: id,
      iframeContainerId: 'eventbrite-widget-container-'+id,

      // Optional
      iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
      onOrderComplete: exampleCallback  // Method called when an order has successfully completed
    });
  }

  useEffect(() => {
    const existingScript = document.getElementById('eventbrite');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.eventbrite.nl/static/widgets/eb_widgets.js';
      script.id = 'eventbrite';
      document.body.appendChild(script);

      script.onload = () => {
        loadWidget();
      };
    }
  }, []);

  return (
      <div id={'eventbrite-widget-container-'+id}></div>
  )
}