 $(document).ready(function() {
  $("#countries").select2(
      {placeholder: "Select a Country"});
    $("#disaster").select2(
        {placeholder: "Select a Disaster",
        allowClear: true});
 });