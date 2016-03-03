load 'redcap_api.rb'

def start
  @url =   'https://redcap.vanderbilt.edu/api/'
  @token = '8E66DB6844D58E990075AFB51658A002'
  @redcap_api = RedcapApi.new(@url, @token)
end

start