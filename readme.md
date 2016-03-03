## Ruby REDCap Api Class

This ruby class will allow you to make calls to a REDCap API using HTTParty
To install HTTParty run: `$ gem install HTTParty` in your terminal.

RedcapApi methods:

    create_record(data)
    update_record(data)
    get_record(record_id)
    get_all_records
    get_instruments
    get_metadata
    get_events
    get_form_event_mappings
    get_arms
    get_users

### Terminal Sandbox

To began run: `$ irb -r ./redcap_api_sandbox.rb`

The Sandbox we will use a URL and Token Provided by Vanderbilt

    url: 'https://redcap.vanderbilt.edu/api/'
    token: '8E66DB6844D58E990075AFB51658A002'


RedcapApi Ruby object:
    `$ @redcap_api`

Sample calls that you can run:
    `$ @redcap_api.get_metadata`
    `$ @redcap_api.get_all_records`

You can use your own Url and Token by setting:
    `$ @redcap_api.url = `
    `$ @redcap_api.token = `

### Note
Resource for an [REDCap API Intro](http://sburns.org/2013/07/22/intro-to-redcap-api.html).


Good Luck and enjoy