require 'test_helper'

class PagesControllerTest < ActionController::TestCase

  test "should get the homepage" do
    get :show, id: 'homepage'
    assert_response :success
    assert_template 'homepage'
  end

end