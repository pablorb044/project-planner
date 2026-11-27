"""add section relationship to messages

Revision ID: 7413fbe06e4c
Revises: 324187e18a6f
Create Date: 2026-11-27 19:15:04.118980

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '7413fbe06e4c'
down_revision: Union[str, Sequence[str], None] = '324187e18a6f'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.add_column(
        'messages',
        sa.Column('section_id', sa.Uuid(), nullable=False)
    )
    op.create_index(
        'ix_messages_section_created',
        'messages',
        ['section_id', 'created_at'],
        unique=False
    )
    op.create_foreign_key(
        'fk_messages_section_id_project_sections',
        'messages',
        'project_sections',
        ['section_id'],
        ['id'],
        ondelete='CASCADE'
    )


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_constraint(
        'fk_messages_section_id_project_sections',
        'messages',
        type_='foreignkey'
    )
    op.drop_index(
        'ix_messages_section_created',
        table_name='messages'
    )
    op.drop_column('messages', 'section_id')