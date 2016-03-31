require 'HTTParty'

class RedcapApi
  attr_accessor :url, :token

  def initialize(url, token)
    @url = url
    @token = token
  end

  def create_record(record)
    #REDCap does not have a way to submit a record without a record_id
    #Therefore I must create a record id that is one larger than the last record

    new_record_id = (get_all_records.last['record_id'].to_i + 1).to_s
    record['record_id'] = new_record_id
    data = [record].to_json

    response = HTTParty.post(@url,
      :body => {
          :token => @token,
          :content => 'record',
          :type => 'flat',
          :format => 'json',
          :overwriteBehavior => 'overwrite',
          :data => data
        }
      )

    if response["count"] == 1
      return {success: true, new_record: data, record_id: new_record_id}
    end
  end

  def update_record(record)
    data = [record].to_json

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
