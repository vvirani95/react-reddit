@subs.each do |sub|
    json.set! sub.id do
        json.extract! sub, :sub_title, :sub_description
    end
end