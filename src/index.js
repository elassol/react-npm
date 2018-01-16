import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './components/AppWrapper';
import './index.less';


class App extends Component {
    render() {
        return (
            <div>
                <AppWrapper/>
            </div>
        )
    }
}

ReactDOM.render( <App />, document.querySelector( '#app' ) );


(function(){
  console.log("it works");

  // List for the three filters
  var recipientData = [
      {value: 'him', text: 'For him'},
      {value: 'her', text: 'For her'},
      {value: 'kids', text: 'For a little one or teenager'}
  ];

  var GiftMatcher = {
      recipient :  "",
      relation : "",
      likes : ""
  };

  var recipientPanel  = document.getElementById('recipient');

  function RecipientListOptions (list, wrapper) {
      var navElem  = wrapper.querySelector(".wrapper-content");
        for (var i = 0; i < list.length; i++) {
          var navItem = document.createElement("a");
          navItem.className = 'option';
          var navItemWrapper = document.createElement("div");
          navItemWrapper.className = 'option-wrapper';
          // Set properties on anchor
          navItem.href = list[i].value;
          navItem.innerHTML = list[i].text;
          // Add anchor to list item, and list item to list
          navElem.appendChild(navItemWrapper).appendChild(navItem);
          // add click Event buttons list
          navItem.addEventListener('click', function(e) {
            e.preventDefault();
            GiftMatcher.recipient = this.value;
            var currentbutton = this;
            CurrentButtonClass(navElem, function(){
              AddMyClass(currentbutton,'current');
            });

            if (this.value === 'kids') {
                newtitle = "Who is...";
                changeTitle(relationPanel, newtitle);
            } else {
                newtitle = "WHO IS MY...";
                changeTitle(relationPanel, newtitle);
            }

            var nextpanel = relationPanel.querySelector(".wrapper-content");

            if (nextpanel.querySelector(".option")) {
              destroyButtons(relationPanel, function(){
                console.log(" destroy buttons fire relations list");
                RelationListOptions(relationData,GiftMatcher.recipient, relationPanel);
              });
              AddMyClass(recipientPanel,'selected');
              AddMyClass(relationPanel,'active');
            } else {
              RelationListOptions(relationData,GiftMatcher.recipient, relationPanel);
              AddMyClass(recipientPanel,'selected');
              AddMyClass(relationPanel,'active');
            }
          });
        }

        BackButtonFunction (wrapper, introPanel, function(){
            addScroll ();
        });
        CloseGiftMatcher(wrapper);
    }

  RecipientListOptions(recipientData,recipientPanel);

})();



const hellowworld = word =>  { console.log(word); };

hellowworld('hello Edu');
