class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.integer :hotel_id
      t.integer :reservation_type_id
      t.integer :room_type_id
      t.integer :fee_type_id
      t.date    :check_in
      t.date    :check_out
      t.timestamps
    end
  end
end
