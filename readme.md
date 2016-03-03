# Ruby REDCap API
This ruby class will allow you to make calls to a REDCap API using HTTParty
To install HTTParty run: `$ gem install HTTParty` in your terminal.

##### RedcapApi Methods

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

## Terminal Sandbox
The Sandbox we will use a URL and Token Provided by Vanderbilt

    url: 'https://redcap.vanderbilt.edu/api/'
    token: '8E66DB6844D58E990075AFB51658A002'

##### Launch Sandbox
    `$ irb -r ./redcap_api_sandbox.rb`

##### RedcapApi Sample Calls
    Ruby RedcapApi Instance: `$ @redcap_api`
    Get RedcapApi Metadata: `$ @redcap_api.get_metadata`
    Get All RedcapApi Records: `$ @redcap_api.get_all_records`

##### Set Your Parameters
    Url: `$ @redcap_api.url = `
    Token: `$ @redcap_api.token = `

## Notes
Resource for an [REDCap API Intro](http://sburns.org/2013/07/22/intro-to-redcap-api.html).

*Good Luck and enjoy*