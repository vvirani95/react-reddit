@posts.each do |post|
    json.set! post.id do
        json.extract! post, :title, :post_body, :sub_identifier
    end
end