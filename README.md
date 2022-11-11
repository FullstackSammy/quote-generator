# Quote Generator
[Live site](https://fullstacksammy.github.io/quote-generator/)

This site is a webiste for any quote nerd out there. It focuses on simple eye-friendly design and on giving random quotes to the user.

![image of responsiveness](/assets/images/responsive.jpg)

## User Stories
Create a Quote Generator website using JavaScript, that allows users to get read quotes and share them.

- Display Quote and author
- New Quote button that generates a new quote
- Share button that allows the user to share quote to Twitter
- loading wheel when quote is loading

## Features
### Existing features
- Random quote generation using an API with over 1600 quotes
- Button to generate a New Quote
- A share button to share a quote to Twitter
- Loading Wheel at the start of loading and while loading a new quote

## Testing
I checked my code on the on the following sites:
- My CSS code on [Jigsaw](https://jigsaw.w3.org/css-validator/#validate_by_input) and it passed
- My HTML code on [W3](https://validator.w3.org/) and it passed
- My JavaScript code on [BeautifyTools](https://beautifytools.com/javascript-validator.php) and it passed


When you first load the page, you might see the loading wheel for a split second before it generates the quote.

![image of loading wheel](/assets/images/loader.jpg)

The quotes are randomly generated from the [TypeFit API](https://type.fit/api/quotes).

![image of quote](/assets/images/quote.jpg)

You have the option to click the New Quote button, which will fetch a new quote from the API and display it on the screen.

![image of responsiveness](/assets/images/new-quote.jpg)

Or you can choose to Tweet the quote you like by clicking the tweet button, which will take you to Twitter, ready to share the quote.

![image of tweet-button](/assets/images/tweet.jpg)

![image of share screen on twitter](/assets/images/share.jpg)

And that is Pretty much it for the site. Simple, fun and it **looks good**!

## Bugs
No bugs were detected, so there was no need for any debugging

## Credits
- Credits to the TypeFit API for providing the API for the quotes. [See them here](https://type.fit/api/quotes)!
- To Hero Patterns for the css code for the background. [Link to there site](https://heropatterns.com/)
- To W3 Schools for providing the loader. [Link to guide](https://www.w3schools.com/howto/howto_css_loader.asp)
