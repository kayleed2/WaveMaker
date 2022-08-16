import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, User

engine = create_engine('mysql+mysqldb://root:@localhost/demodb')

Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

user = User()
user.firstName = 'Kaylee'
user.lastName = 'Dao'
user.email = 'kayleed2@gmail.com'
user.platform = 'Instagram'
session.add(user)

session.commit()
session.close()
