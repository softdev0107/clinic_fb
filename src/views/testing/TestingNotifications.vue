<template>
  <div class="tab-content">
    <p class="description">Choose how you want to receive notifications and the frequency. Notifications will include a link to login to this dashboard, but will not contain dashboard data.</p>
    <form action="" method="POST">
      <div class="form-container">
        <div class="container-left">
          <div class="receive-email-container">
            <img src="@/assets/temp_src/receive_email_notifications.png" alt="">
            <p class="text-sendtoemail">Emails will be sent to</p>
            <a href="">Change Email</a><br/>
          </div>
          <div class="receive-sms-container">
            <img src="@/assets/temp_src/receive_sms_notifications.png" alt=""><br/>
          </div>
          <div class="phone-number-container">
            <img src="@/assets/temp_src/receive_sms_notifications.png" alt="">
          </div>
          <p>Only For SMS Notification</p>
        </div>
        <div class="container-right">
          <label for="checkbox">Choose the frequency of your notifications</label>
          <div class="noti-group">
            <div class="input-checkbox"><input type="checkbox" checked/><label>Daily remider notifications with link to dashboard</label></div>
            <div class="input-checkbox"><input type="checkbox" checked/><label>Weekly reminder notification with link to dashboard</label></div>
            <div class="input-checkbox"><input type="checkbox" checked/><label>Monthly reminder notification with link to dashboard</label></div>
          </div>
        </div>
      </div>
      <input class="button-submit mt-5" type="submit" value="Save & Continue"/>
    </form>
  </div>
</template>

<style>
  .tab-content{
    padding:20px;
    margin:0px 10px;
  }
  .description {
    width: 50%;
    padding-right: 20px;
  }
  .form-container{
    margin:20px 0px;
    display:flex;
  }
  .receive-email-container{
    margin:0px 0px;
  }
  .receive-sms-container{
    margin:25px 0px;
  }
  .phone-number-container{
    margin:15px 0px;
  }
  .form-container a {
    text-decoration:none;
    font-size:12px;
    margin-top:15px;
  }
  .form-container p{
    font-size:12px;
    color:gray;
    position: relative;
  }

  .container-left{
    flex:1;
  }
  .container-right{
    flex:1;
  }
  .input-checkbox{
    white-space:nowrap;
    margin:25px 0px;
  }
  .input-checkbox input{
    background:blue;
    width:20px;
    height:20px;
    vertical-align: middle;
    position: relative;
    bottom: 1px;
  }
  .input-checkbox label{
    padding-left:15px;
  }
  .button-submit{
    padding:10px 20px;
    background-color:blue;
    color:white;
    border-radius:5px;
    border-color:blue;
  }
</style>
