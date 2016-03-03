require 'HTTParty'

class RedcapApi
  attr_accessor :url, :token

  def initialize(url, token)
    @url = url
    @token = token
  end

  def create_record(data)
    HTTParty.post(@url,
      :body => {
          :token => @token,
          :content => 'record',
          :type => 'flat',
          :format => 'json',
          :overwriteBehavior => 'overwrite',
          :data => data
        }
      )
  end

  def update_record(data)
    HTTParty.post(@url,
      :body => {
          :token => @token,
          :content => 'record',
          :type => 'flat',
          :format => 'json',
          :overwriteBehavior => 'overwrite',
          :data => data
        }
      )
  end

  def get_record(record_id)
    record = HTTParty.post(@url,
      :body => {
          :token => @token,
          :content => 'record',
          :type => 'flat',
          :format => 'json',
          :records => record_id
        }
      )
      record.first
  end

  def get_all_records
    HTTParty.post(@url,
      :body => {
          :token => @token,
          :content => 'record',
          :type => 'flat',
          :format => 'json'
        }
      )
  end

  def get_redcap(content)
    HTTParty.post(@url,
      :body => {
          :token => @token,
          :content => content,
          :format => 'json'
        }
      )
  end

  def get_instruments
    get_redcap('instrument')
  end

  def get_metadata
    get_redcap('metadata')
  end

  def get_events
    get_redcap('event')
  end

  def get_form_event_mappings
    get_redcap('formEventMapping')
  end

  def get_arms
    get_redcap('arm')
  end

  def get_users
    get_redcap('user')
  end
end
