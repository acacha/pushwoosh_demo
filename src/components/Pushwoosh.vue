<template>
  <div class="pushwoosh">
    <h1>{{ msg }}</h1>
    <h2>First install Pushwoosh Android demo app on your phone. You can find the app at:</h2>
    <h3><a href="https://play.google.com/store/apps/details?id=com.pushwoosh.test.tags.sample.app&hl=es">Google Play</a></h3>
    <div class="box box-primary direct-chat direct-chat-primary">
      <div class="box-header with-border">
        <h3 class="box-title">Send notifications</h3>

        <div class="box-tools pull-right">
          <span data-toggle="tooltip" title="3 New Messages" class="badge bg-light-blue">3</span>
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
          </button>
          <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
        </div>
      </div>
      <!-- /.box-header -->
      <div class="box-body">
        <!-- Conversations are loaded here -->
        <div class="direct-chat-messages">
          <!-- Message. Default to the left -->
          <div class="direct-chat-msg">
            <div class="direct-chat-info clearfix">
              <span class="direct-chat-name pull-left">Pushwoosh</span>
              <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
            </div>
            <!-- /.direct-chat-info -->
            <img class="direct-chat-img" src="bower_components/AdminLTE/dist/img/user1-128x128.jpg" alt="Message User Image"><!-- /.direct-chat-img -->
            <div class="direct-chat-text">
              Example of notification!
            </div>
            <!-- /.direct-chat-text -->
          </div>
          <!-- /.direct-chat-msg -->

          <!-- /.direct-chat-msg -->
        </div>
        <!--/.direct-chat-messages-->

        <!-- /.direct-chat-pane -->
      </div>
      <!-- /.box-body -->
      <div class="box-footer">
          <div class="input-group">
            <input id="pushwoosh_message" type="text" name="message" placeholder="Type notification ..." class="form-control">
                      <span class="input-group-btn">
                        <button v-on:click="notifyWithAjax" type="button" class="btn btn-primary btn-flat">Send</button>
                      </span>
          </div>
      </div>
      <!-- /.box-footer-->
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Pushwoosh sample'
    }
  },
  methods: {
    notifyWithAjax: function () {
      var $message = $('#pushwoosh_message').val();
      console.debug($message);
      $.ajax({
        type: "POST",
        url: "https://cp.pushwoosh.com/json/1.3/createMessage",
        data: JSON.stringify({
          "request": {
            "application": "4FC89B6D14A655.46488481",
            "auth": "mTdns0j6qLYPa/A5htmD46xVyoxdVQfPBz7NRqYYHz9PhvKXgJtOkAY+yo0YTXDEoztQAJFY0JmXnd89tf59",
            "notifications": [{
              "send_date": "now",
              "ignore_user_timezone": true,
              "content": $message
            }]
          }
        }),
        dataType: "json"
      }).done(function(data) {
        console.log(data);
      });
    }
  }
}
</script>
