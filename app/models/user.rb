class User < ApplicationRecord

  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    #database query
    user = User.find_by(email: email)
    

    
    return nil unless user
    #implicit return
    user.is_password?(password) ? user : nil
end


  def password=(password)
    #for verification only
    @password = password
    #saved value
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    #first generate the session token
    self.session_token = User.generate_session_token
    #! = 'loud/fast error'
    self.save!
    #return
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

end