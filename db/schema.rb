# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150206220529) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "follows", force: :cascade do |t|
    t.integer  "from_user_id"
    t.integer  "to_user_id"
    t.boolean  "requested"
    t.boolean  "accepted"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "locations", force: :cascade do |t|
    t.datetime "starttime"
    t.datetime "endtime"
    t.string   "name"
    t.string   "type"
    t.decimal  "latitude"
    t.decimal  "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "meals", force: :cascade do |t|
    t.datetime "time"
    t.string   "type"
    t.string   "name"
    t.integer  "calories"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "steps", force: :cascade do |t|
    t.datetime "starttime"
    t.datetime "endtime"
    t.integer  "duration"
    t.integer  "steps"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "fname"
    t.string   "lname"
    t.string   "email"
    t.string   "password_digest"
    t.integer  "human_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "accesstoken"
    t.string   "publictoken"
  end

end
