require 'test_helper'
class ArtistsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:artists)
  end

  test "should respond to json" do
    get :index, format: :json
    artists_json = JSON.parse(@response.body)
    assert_equal artists_json.length, Artist.count
  end

  test "should get show" do
    get :show, id: artists(:artist_1).id
    assert_response :success
    assert_not_nil assigns(:artist)
  end

  test "should create an artist" do
    post :create, artist:
      {
        id: artists(:artist_1).id,
        name: artists(:artist_1).name
      }, format: :json

    assert_response :success
  end

end