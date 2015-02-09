console.log("loaded")


            
// ------------ PULL ALL USERS FOR SIDEBAR --------------------//

          $.ajax({
            url: '/users/' + humanapi_data[2].user_id + '/all',
            method: 'GET'
          }).done(function(data){
              var i;
              for (i=0; i < data.length; i++) {
                $('.follows').append('<div class="person_you_follow"><img src="http://api.randomuser.me/0.2/portraits/men/20.jpg" class="img-circle"><li>' + data[i].fname + '</li><div class="link_to_user" id="' + data[i].id + '"></div></div>')
              }
          })
// ------------ "TODAY" STEPS AND LOCATION DATA --------------------//

          $.ajax({
            url: '/users/' + humanapi_data[2].user_id + '/today',
            method: 'GET'
          }).done(function(data){
            $('#today_steps').text(data.today_steps)
            $('#today_locations').text(data.today_locations)
            }
          )
         
// ------------ My Account and Main User Page Toggle --------------------//

          $('.my_account_toggle').on('click', function(){
            $('.my_account_options').toggle("blind", function(){
            }); 
          })
          
          $('.update_account').on('click', function() {
            $('.today_summary, .user_data_wrapper, .my_account_options, .today_title').hide()
            $('.my_account_section').show("slow")
          })

          $('.user_info_sidebar').on('click', function() {
            $('.my_account_section').hide()
            $('.today_summary, .user_data_wrapper, .today_title').show("blind")

          })     

// ------------ User Follow/ Invite Request--------------------//

        // 
        $('.follows').on('click','.link_to_user',function(event){
              $.ajax({
                url: '/users/' + humanapi_data[2].user_id + '/users/' + event.target.id +'/follow', 
                method: 'POST'
              }).done(function(data){
                  if (data.status === "error") {
                    alert("You already requested to follow them.")
                  } else if (data.status === "success") {
                    alert("Follow request sent. You can access their data when they aceept your request.")
                  }
              })
        })

        // 

        $.ajax({
            url: '/users/' + humanapi_data[2].user_id + '/follows',
            method: 'GET'
          }).done(function(data){
              $('.follow_requests_count').text(data.count.toString())
              var i;
              for (i=0; i < data.follow_array.length; i++) {
                $('.follow_request_options').append('<li id="'+data.follow_array[i].id+'">' + data.follow_array[i].fname +'<button>Yes</button><button>No</button></li>')
              }
            }
          )


          // follow request dropdown functionality

          $('.follow_request_options').on('click', function(event){
              var response = event.target.innerHTML;
              var from_user_id = event.target.parentElement.id
              if (event.target.tagName === "LI" || event.target.tagName === "UL") { console.log('Click a button instead')

              } else {
                  event.target.parentElement.remove()
                  $.ajax({
                    url: '/users/' + humanapi_data[2].user_id + '/follows',
                    method: 'PUT',
                    data: {response: response, from_user: from_user_id}
                  }).done(function(data){
                      console.log("Response: " + data.params.response)
                      var new_count = parseInt($('.follow_requests_count').text())-1
                      $('.follow_requests_count').text(new_count.toString())
                  })
              }
           
            })









// ------------ Stuff that should be trashed --------------------//     

          $('.display_data').on('click', function() {
              $.ajax({
                url: '/users/' + humanapi_data[2].user_id + '/step',
                method: 'GET'
              }).done(function(data){
                  var i;
                  $('body').append("<ul class='step_data'></ul>")
                        for (i=0; i<data.length; i++) {
                          $('ul').append("<li>" + data[i].distance + ", " + data[i].startTime + ", " + data[i].endTime + '</li>')
                        }   
              })
          })

          $('.location').on('click', function() {
            $.ajax({
              url: '/users/' + humanapi_data[2].user_id + '/location',
              method: 'GET'
            }).done(function(data){
              $('.step_data').remove()
                  var i;
                  $('body').append("<ul class='location_data'></ul>")
                  
                  for (i=0; i<data.length; i++) {
                      $('ul').append("<li>" + data[i].name + ", " + data[i].startTime + ", " + data[i].endTime + '</li>')
                  }   
            })
          })


/// ----------------------HUMAN API BUTTON ------------------////////

            // var connectBtn = document.getElementById('connect-health-data-btn');
            // connectBtn.addEventListener('click', function(e) {
            $('#connect-health-data-btn, .edit_health_data').on('click', function(e){
             
              var option1 = {
                      clientId: humanapi_data[3].clientId,
                      // can be email or any other internal id of the user in your system
                      clientUserId: humanapi_data[5].email,
                      finish: function(err, sessionTokenObject) {
                        console.log(sessionTokenObject)
                  
                            $.ajax({
                              url: '/apis/query',
                              method: 'POST',
                              data: {sessionTokenObject: sessionTokenObject, client_secret: humanapi_data[4].client_secret, user_id: humanapi_data[2].user_id}
                            }).done(function(data){})
                      },
                      close: function() {
                        // do something here when user just closed popup
                        // `close` callback function is optional
                      }
              };

              var option2 = {
                    publicToken: humanapi_data[0].publicToken, 
                    clientUserId: encodeURIComponent(humanapi_data[5].email), 
                    close: function() {
                      // optional callback that will be called if the user closes the popup 
                      // without connecting any data sources.
                    },
                    error: function(err) {
                      // optional callback that will be called if an error occurs while 
                      // loading the popup.
                      
                      // `err` is an object with the fields: `code`, `message`, `detailedMessage`
                     } 
              }

              if (humanapi_data[0].publicToken == null) {
                    HumanConnect.open(option1);
              } else {
                HumanConnect.open(option2);
             }
          
            });



          
 